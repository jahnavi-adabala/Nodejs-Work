const fs = require("fs");

fs.writeFileSync("Hello.txt","Hello all");

const data=fs.readFileSync("Hello.txt","utf8");
console.log(data);