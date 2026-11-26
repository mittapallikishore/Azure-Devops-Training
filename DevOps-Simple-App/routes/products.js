const express = require("express");
const router = express.Router();

let products = [
    { id: 101, name: "Laptop", price: 55000, available: true },
    { id: 102, name: "Mobile", price: 25000, available: true }
];

// Product search endpoint
router.get("/search", (req, res) => {
    const query = req.query.q;

    if (!query || !query.trim()) {
        return res.status(400).json({
            success: false,
            message: "Search query parameter q is required"
        });
    }

    const results = products.filter(product =>
        product.name.toLowerCase().includes(query.trim().toLowerCase())
    );

    res.json({
        success: true,
        query,
        count: results.length,
        data: results
    });
});

router.get("/", (req, res) => {
    res.json({ success: true, data: products });
});

router.get("/:id", (req, res) => {
    const product = products.find(p => p.id === Number(req.params.id));

    if (!product) {
        return res.status(404).json({ success: false, message: "Product not found" });
    }

    res.json({ success: true, data: product });
});

router.post("/", (req, res) => {
    const { name, price } = req.body;

    if (!name || typeof price !== "number" || price <= 0) {
        return res.status(400).json({
            success: false,
            message: "Valid product name and positive numeric price are required"
        });
    }

    const product = {
        id: products.length ? Math.max(...products.map(p => p.id)) + 1 : 101,
        name,
        price,
        available: true
    };

    products.push(product);
    res.status(201).json({ success: true, data: product });
});

router.put("/:id", (req, res) => {
    const product = products.find(p => p.id === Number(req.params.id));

    if (!product) {
        return res.status(404).json({ success: false, message: "Product not found" });
    }

    const { name, price, available } = req.body;

    if (name !== undefined) product.name = name;
    if (price !== undefined) product.price = price;
    if (available !== undefined) product.available = available;

    res.json({ success: true, data: product });
});

router.delete("/:id", (req, res) => {
    const index = products.findIndex(p => p.id === Number(req.params.id));

    if (index === -1) {
        return res.status(404).json({ success: false, message: "Product not found" });
    }

    products.splice(index, 1);
    res.status(204).end();
});

module.exports = router;
