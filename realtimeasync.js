// If we used readFileSync, the server stops handling other requests until the file is read.

// If 100 users visit at once, they’re all stuck waiting.

// With readFile, Node serves multiple users because file reading happens in background, and callbacks return when ready.

const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
  //  Blocking (bad for servers)
  // const data = fs.readFileSync("a.txt", "utf8");
  // res.end(data);

  //  Non-blocking (good for servers)
  fs.readFile("example.txt", "utf8", (err, data) => {
    if (err) {
      res.end("Error reading file");
    } else {
      res.end(data);
    }
  });

}).listen(3000, () => console.log("Server running..."));