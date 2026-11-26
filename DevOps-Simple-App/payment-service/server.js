
const http = require("http");

const PORT = process.env.PORT || 4000;

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");

    if (req.method === "GET" && req.url === "/health") {
        return res.end(JSON.stringify({
            service: "payment-service",
            status: "Healthy"
        }));
    }

    if (req.method === "POST" && req.url === "/payments") {
        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", () => {
            try {
                const payment = JSON.parse(body);
                const requestId = req.headers["x-request-id"] || "not-provided";

                if (!payment.orderId || !payment.userId || !payment.productId || !payment.quantity) {
                    res.statusCode = 400;
                    return res.end(JSON.stringify({
                        success: false,
                        message: "Valid order details are required"
                    }));
                }

                const result = {
                    success: true,
                    service: "payment-service",
                    transactionId: `TXN-${Date.now()}`,
                    orderId: payment.orderId,
                    paymentStatus: "Approved",
                    requestId
                };

                console.log(JSON.stringify({
                    service: "payment-service",
                    request_id: requestId,
                    order_id: payment.orderId,
                    payment_status: "Approved"
                }));

                res.statusCode = 200;
                res.end(JSON.stringify(result));
            } catch {
                res.statusCode = 400;
                res.end(JSON.stringify({
                    success: false,
                    message: "Invalid JSON request"
                }));
            }
        });

        return;
    }

    res.statusCode = 404;
    res.end(JSON.stringify({ message: "Route not found" }));
});

server.listen(PORT, "0.0.0.0", () => {
    console.log(`Payment Service running on port ${PORT}`);
});
