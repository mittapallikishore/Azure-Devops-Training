
const fs = require("fs");
const assert = require("assert");

const html = fs.readFileSync("index.html", "utf8");

assert.ok(html.trim().length > 0, "HTML file must not be empty");
assert.ok(/<html[\s>]/i.test(html), "HTML must contain an html tag");
assert.ok(/<body[\s>]/i.test(html), "HTML must contain a body tag");

console.log("PASS: HTML file exists and contains html and body tags.");
