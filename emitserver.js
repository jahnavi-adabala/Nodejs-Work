const http = require("http");
const fs = require("fs");
const EventEmitter = require("events");

const bell = new EventEmitter();


bell.on("ring",()=>{
    console.log("Student1 runs to class");
});
bell.on("ring", ()=>{
    console.log("Student goes to playground");
});
bell.on("ring",()=>{
    console.log("Teacher enters the class");
});

const server = http.createServer((req,res)=>{
  if(req.url === "/"){
    fs.readFile("emitter.html",(err,data)=>{
        if(err){
            res.end("Error loading page");
        }
        else{
            res.end(data);
            bell.emit("ring");
        }
    });
  }
});
server.listen(3000,()=>{
console.log("Server is running at http://localhost:3000");
});