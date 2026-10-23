const assert = require("node:assert/strict");

console.log("Running Day 7 test demonstration...");

assert.equal(2 + 2, 4, "Basic calculation should pass");

console.log("Test passed: basic calculation.");

if (process.env.INTENTIONAL_TEST_FAILURE === "true") {
  assert.fail("Intentional failure for the Day 7 demonstration.");
}

console.log("All demonstration tests passed.");
