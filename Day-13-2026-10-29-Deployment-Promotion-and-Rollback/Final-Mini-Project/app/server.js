
const http = require("http");
const fs = require("fs");
const path = require("path");

const port = Number(process.env.PORT || 3000);
const indexPath = path.join(__dirname, "index.html");

const server = http.createServer((req, res) => {
  const pathname = new URL(req.url, "http://localhost").pathname;

  if (pathname === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "healthy" }));
    return;
  }

  if (pathname === "/") {
    fs.readFile(indexPath, (error, content) => {
      if (error) {
        res.writeHead(500);
        res.end("Unable to load website.");
        return;
      }

      res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
      });
      res.end(content);
    });
    return;
  }

  res.writeHead(404);
  res.end("Not found");
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Website listening on port ${port}`);
});
