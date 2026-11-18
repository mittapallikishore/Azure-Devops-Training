
const { test } = require("node:test");
const assert = require("node:assert");
const request = require("supertest");

const app = require("../server");

// Test 1: Homepage
test("Homepage should return HTTP 200", async () => {
    const response = await request(app).get("/");

    assert.equal(response.status, 200);
    assert.match(response.text, /Welcome to DevOps Simple Application/);
});

// Test 2: Health endpoint
test("Health API should return Healthy", async () => {
    const response = await request(app).get("/health");

    assert.equal(response.status, 200);
    assert.equal(response.body.status, "Healthy");
});

// Test 3: Invalid endpoint
test("Invalid endpoint should return HTTP 404", async () => {
    const response = await request(app).get("/invalid");

    assert.equal(response.status, 404);
});
