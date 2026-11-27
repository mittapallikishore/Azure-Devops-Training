
const { spawnSync } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const repoRoot = path.resolve(__dirname, "..", "..");
const testScript = path.join(
  repoRoot,
  "Day-11-2026-10-27-Containerized-Build-and-Image-Provenance",
  "tests",
  "quality.test.js"
);

const resultsDir = path.join(__dirname, "..", "test-results");
const resultsFile = path.join(resultsDir, "junit.xml");
const forceFailure = process.env.DAY12_FORCE_TEST_FAILURE === "true";

function xmlEscape(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

fs.mkdirSync(resultsDir, { recursive: true });

const result = spawnSync(process.execPath, [testScript], {
  encoding: "utf8"
});

const output = `${result.stdout || ""}${result.stderr || ""}`;
const testFailed = Boolean(result.error) || result.status !== 0;
const failed = testFailed || forceFailure;

const failureDetails = result.error
  ? result.error.message
  : testFailed
    ? output || `Test process exited with code ${result.status}`
    : forceFailure
      ? "Deliberate failure requested by DAY12_FORCE_TEST_FAILURE."
      : "";

if (output) process.stdout.write(output);

const failureXml = failed
  ? `<failure message="Quality tests failed">${xmlEscape(failureDetails)}</failure>`
  : "";

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<testsuites tests="1" failures="${failed ? 1 : 0}" errors="0" time="0">
  <testsuite name="Day 12 Quality Tests" tests="1" failures="${failed ? 1 : 0}" errors="0" time="0">
    <testcase classname="quality" name="Application quality checks" time="0">
      ${failureXml}
    </testcase>
  </testsuite>
</testsuites>
`;

fs.writeFileSync(resultsFile, xml, "utf8");

console.log(`JUnit results written to: ${resultsFile}`);

if (failed) {
  console.error(`Quality test stage failed: ${failureDetails}`);
  process.exitCode = 1;
} else {
  console.log("Quality tests passed.");
}
