const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // Serve HTML with file links
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <h1>File Server</h1>
      <ul>
        <li><a href="/file1.txt">Download File 1</a></li>
        <li><a href="/file2.txt">Download File 2</a></li>
      </ul>
    `);
  } else if (req.url === "/file1.txt" || req.url === "/file2.txt") {
    // Stream the requested file
    const filePath = path.join(__dirname, req.url);
    const readStream = fs.createReadStream(filePath);

    res.writeHead(200, { "Content-Type": "text/plain" });
    readStream.pipe(res); // sends chunks automatically
  } else {
    // 404 Page
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://127.0.0.1:3000/");
});
