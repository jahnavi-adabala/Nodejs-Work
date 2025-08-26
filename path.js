const path = require("path");
console.log(path.basename("c:/Infosys/crawler.py"));
console.log(path.dirname("c:/Infosys/crawler.py"));
console.log(path.extname("c:/Infosys/crawler.py"));
console.log(path.join("folder", "subfolder", "file.txt"));
console.log(path.resolve("folder", "file.txt"));
console.log(path.isAbsolute("C:/Users/Jahnavi")); 
console.log(path.isAbsolute("./file.txt"));      
console.log(path.normalize("C:/Users//Jahnavi/Desktop/../file.txt"));
console.log(path.parse("C:/Users/Jahnavi/Desktop/file.txt"));
console.log(path.format({
  dir: "C:/Users/Jahnavi/Desktop",
  name: "file",
  ext: ".txt"
}));
