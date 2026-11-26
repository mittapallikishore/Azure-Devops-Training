
const express = require("express");
const crypto = require("crypto");

const app = express();
const PORT = process.env.PORT || 3000;

// Request tracing middleware
app.use((req, res, next) => {
    const requestId = req.get("X-Request-ID") || crypto.randomUUID();
    const startTime = process.hrtime.bigint();

    req.requestId = requestId;
    res.setHeader("X-Request-ID", requestId);

    res.on("finish", () => {
        const duration = Number(process.hrtime.bigint() - startTime) / 1e9;

        console.log(JSON.stringify({
            timestamp: new Date().toISOString(),
            level: "info",
            service: "devops-simple-app",
            request_id: requestId,
            method: req.method,
            path: req.originalUrl,
            status: res.statusCode,
            response_time_seconds: Number(duration.toFixed(3))
        }));
    });

    next();
});

app.use(express.json());

// Homepage
app.get("/", (req, res) => {
    res.send("Welcome to DevOps Simple Application");
});

// Health check
app.get("/health", (req, res) => {
    res.json({ status: "Healthy" });
});

// API routes
app.use("/api/users", require("./routes/users"));
app.use("/api/products", require("./routes/products"));
app.use("/api/orders", require("./routes/orders"));

// Start server
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Application running on port ${PORT}`);
    });
}

module.exports = app;
