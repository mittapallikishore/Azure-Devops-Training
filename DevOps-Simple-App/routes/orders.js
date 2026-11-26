const express = require("express");
const router = express.Router();

const FAILURE_THRESHOLD = 3;
const RECOVERY_TIMEOUT_MS = 10000;

let circuitState = "CLOSED";
let consecutiveFailures = 0;
let circuitOpenedAt = null;
let halfOpenRequestInFlight = false;

let orders = [
    {
        orderId: 501,
        userId: 1,
        productId: 101,
        quantity: 2,
        status: "Created"
    }
];

function logCircuitEvent(event, details = {}) {
    console.log(JSON.stringify({
        timestamp: new Date().toISOString(),
        service: "order-service",
        component: "payment-circuit-breaker",
        event,
        state: circuitState,
        ...details
    }));
}

function getCircuitStatus() {
    return {
        state: circuitState,
        consecutiveFailures,
        failureThreshold: FAILURE_THRESHOLD,
        recoveryTimeoutMs: RECOVERY_TIMEOUT_MS,
        halfOpenRequestInFlight,
        openedAt: circuitOpenedAt
            ? new Date(circuitOpenedAt).toISOString()
            : null
    };
}

function recordFailure(errorMessage, requestId) {
    consecutiveFailures++;

    logCircuitEvent("PAYMENT_FAILURE", {
        request_id: requestId,
        consecutiveFailures,
        error: errorMessage
    });

    if (
        circuitState === "HALF-OPEN" ||
        consecutiveFailures >= FAILURE_THRESHOLD
    ) {
        circuitState = "OPEN";
        circuitOpenedAt = Date.now();
        halfOpenRequestInFlight = false;

        logCircuitEvent("CIRCUIT_OPENED", {
            request_id: requestId,
            reason: errorMessage,
            recoveryTimeoutMs: RECOVERY_TIMEOUT_MS
        });
    }
}

function recordSuccess(requestId) {
    const previousState = circuitState;

    circuitState = "CLOSED";
    consecutiveFailures = 0;
    circuitOpenedAt = null;
    halfOpenRequestInFlight = false;

    if (previousState !== "CLOSED") {
        logCircuitEvent("CIRCUIT_CLOSED", {
            request_id: requestId,
            reason: "Payment Service recovered successfully"
        });
    }
}

router.get("/circuit-breaker/status", (req, res) => {
    res.json({
        success: true,
        circuitBreaker: getCircuitStatus()
    });
});

router.get("/", (req, res) => {
    res.json({ success: true, data: orders });
});

router.get("/:id", (req, res) => {
    const order = orders.find(o => o.orderId === Number(req.params.id));

    if (!order) {
        return res.status(404).json({
            success: false,
            message: "Order not found"
        });
    }

    res.json({ success: true, data: order });
});

router.post("/", (req, res) => {
    const { userId, productId, quantity } = req.body;

    if (
        !Number.isInteger(userId) ||
        !Number.isInteger(productId) ||
        !Number.isInteger(quantity) ||
        quantity <= 0
    ) {
        return res.status(400).json({
            success: false,
            message: "Valid userId, productId and positive quantity are required"
        });
    }

    const order = {
        orderId: orders.length
            ? Math.max(...orders.map(o => o.orderId)) + 1
            : 501,
        userId,
        productId,
        quantity,
        status: "Created"
    };

    orders.push(order);
    res.status(201).json({ success: true, data: order });
});

// Order Service calls Payment Service through Docker Compose DNS.
// The circuit breaker protects this call from repeated failures.
router.post("/:id/pay", async (req, res) => {
    const order = orders.find(
        o => o.orderId === Number(req.params.id)
    );

    if (!order) {
        return res.status(404).json({
            success: false,
            message: "Order not found"
        });
    }

    // After the recovery timeout, allow one HALF-OPEN test request.
    if (circuitState === "OPEN") {
        const recoveryTimeElapsed =
            Date.now() - circuitOpenedAt >= RECOVERY_TIMEOUT_MS;

        if (!recoveryTimeElapsed) {
            return res.status(503).json({
                success: false,
                message: "Payment circuit is OPEN. Request blocked.",
                circuitBreaker: getCircuitStatus()
            });
        }

        circuitState = "HALF-OPEN";
        halfOpenRequestInFlight = false;

        logCircuitEvent("CIRCUIT_HALF_OPEN", {
            request_id: req.requestId
        });
    }

    // Permit only one recovery probe while HALF-OPEN.
    if (
        circuitState === "HALF-OPEN" &&
        halfOpenRequestInFlight
    ) {
        return res.status(503).json({
            success: false,
            message: "Payment recovery test is already in progress.",
            circuitBreaker: getCircuitStatus()
        });
    }

    const isRecoveryProbe = circuitState === "HALF-OPEN";

    if (isRecoveryProbe) {
        halfOpenRequestInFlight = true;
    }

    try {
        const response = await fetch("http://payment:4000/payments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Request-ID": req.requestId || ""
            },
            body: JSON.stringify(order),
            signal: AbortSignal.timeout(3000)
        });

        const paymentResult = await response.json();

        if (!response.ok || !paymentResult.success) {
            const failureMessage =
                paymentResult.message || `Payment HTTP ${response.status}`;

            recordFailure(failureMessage, req.requestId);

            return res.status(502).json({
                success: false,
                message: "Payment Service rejected the request",
                paymentResponse: paymentResult,
                circuitBreaker: getCircuitStatus()
            });
        }

        recordSuccess(req.requestId);

        order.status = "Paid";

        return res.json({
            success: true,
            message: "Payment completed successfully",
            order,
            payment: paymentResult,
            circuitBreaker: getCircuitStatus()
        });

    } catch (error) {
        recordFailure(error.message, req.requestId);

        console.error(JSON.stringify({
            timestamp: new Date().toISOString(),
            service: "order-service",
            request_id: req.requestId,
            error: error.message
        }));

        return res.status(503).json({
            success: false,
            message: "Payment Service is currently unavailable",
            circuitBreaker: getCircuitStatus()
        });
    }
});

router.put("/:id", (req, res) => {
    const order = orders.find(o => o.orderId === Number(req.params.id));

    if (!order) {
        return res.status(404).json({
            success: false,
            message: "Order not found"
        });
    }

    const { quantity, status } = req.body;

    if (quantity !== undefined) order.quantity = quantity;
    if (status !== undefined) order.status = status;

    res.json({ success: true, data: order });
});

router.delete("/:id", (req, res) => {
    const index = orders.findIndex(
        o => o.orderId === Number(req.params.id)
    );

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: "Order not found"
        });
    }

    orders.splice(index, 1);
    res.status(204).end();
});

module.exports = router;
