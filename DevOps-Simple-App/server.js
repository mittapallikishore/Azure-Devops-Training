const express = require("express");

const app = express();

const PORT = 3000;

// Homepage
app.get("/", (req, res) => {
    res.send("Welcome to DevOps Simple Application");
});

// Health check API
app.get("/health", (req, res) => {
    res.json({
        status: "Healthy"
    });
});

// Start server
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Application running on port ${PORT}`);
    });
}

module.exports = app;