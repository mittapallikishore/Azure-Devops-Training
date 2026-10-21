
const fs = require("fs");
const path = require("path");
const assert = require("assert");

const html = fs.readFileSync("index.html", "utf8");

const tests = [
  {
    name: "HTML file is not empty",
    run: () => assert.ok(html.trim().length > 0)
  },
  {
    name: "HTML contains an html tag",
    run: () => assert.ok(/<html[\s>]/i.test(html))
  },
  {
    name: "HTML contains a body tag",
    run: () => assert.ok(/<body[\s>]/i.test(html))
  }
];

const results = tests.map(test => {
  try {
    test.run();
    console.log(`PASS: ${test.name}`);
    return { name: test.name, error: null };
  } catch (error) {
    console.error(`FAIL: ${test.name}: ${error.message}`);
    return { name: test.name, error };
  }
});

const escapeXml = value =>
  String(value).replace(/[<>&'"]/g, char => ({
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    "'": "&apos;",
    '"': "&quot;"
  })[char]);

const failures = results.filter(result => result.error);
const report = `<?xml version="1.0" encoding="UTF-8"?>
<testsuite name="HTML quality tests" tests="${results.length}" failures="${failures.length}">
${results.map(result => result.error
  ? `<testcase name="${escapeXml(result.name)}"><failure message="${escapeXml(result.error.message)}"/></testcase>`
  : `<testcase name="${escapeXml(result.name)}"/>`
).join("\n")}
</testsuite>`;

fs.mkdirSync("test-results", { recursive: true });
fs.writeFileSync(path.join("test-results", "junit.xml"), report);

if (failures.length > 0) {
  process.exitCode = 1;
}
