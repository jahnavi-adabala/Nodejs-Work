const express = require("express");

const app = express();

const port = 5000;
// when we want to apply to avariable we need to remove app.use
// app.use((req,res,next)=>{
//     if (10<20)
//     {
//         next();
//     }
// })
const firstHandler=((req,res,next)=>{
    if (10<20)
    {
        next();
    }
})
const secondHandler=((req,res,next)=>{
    if (30>20)
    {
        next();
    }
})
const thirdHandler=((req,res,next)=>{
    if (40>30)
    {

        next();  
    }
    
})

app.get('/home',firstHandler,(req,res)=>{
    res.send("Hello Iam home page");
});

app.get('/about',secondHandler,(req,res)=>{
    res.send("About here");
});

app.get('/contact',thirdHandler,(req,res)=>{
    res.send("Contact me ");
});

app.listen(port,( )=>{
    console.log("Server running Succesfully");
});