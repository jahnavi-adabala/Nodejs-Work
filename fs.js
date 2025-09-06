const fs = require("fs");
// fs.writeFile("example.txt", "Hello, Node.js!", (err) => {
//   if (err) throw err;
//   console.log("File created and data written!");
// });


//read
fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log("File content:", data);
});

//append
fs.appendFile("example.txt", "\nThis is new content.", (err) => {
  if (err) throw err;
  console.log("Data appended!");
});

//rename
fs.rename("example.txt", "newfile.txt", (err) => {
  if (err) throw err;
  console.log("File renamed!");
});
//check existance
if (fs.existsSync("example.txt")) {
  console.log("File exists!");
} else {
  console.log("File does not exist!");
}
