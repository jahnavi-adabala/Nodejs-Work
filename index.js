const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) =>{
    

        fs.readFile("index.html", (err, data) =>{
            if(err){
                res.end("Error loading page");
            }
            else{
                res.end(data);
            }
        });
    
});
server.listen(3000,()=>{
    console.log("Server is running at http://localhost:3000");
});