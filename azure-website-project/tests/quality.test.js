
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const htmlPath = path.join(__dirname, "..", "index.html");
const serverPath = path.join(__dirname, "..", "server.js");

assert.ok(fs.existsSync(htmlPath), "index.html must exist");
assert.ok(fs.existsSync(serverPath), "server.js must exist");

const html = fs.readFileSync(htmlPath, "utf8");

assert.match(html, /<html/i, "HTML document must have an html tag");
assert.match(html, /Welcome to My Azure Website/i, "Homepage title text must exist");

console.log("All quality tests passed.");
