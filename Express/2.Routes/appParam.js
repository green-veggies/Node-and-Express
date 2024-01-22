import express from "express";
const app = express();
const port = 3000;

app.param("year",(req,res,next,year)=>{
    console.log(`year : ${year}`);
    next();
});

app.get("/year/:year",(req,res)=>{
    res.send(`The param value received!`);
});


app.listen(port,()=>{
    console.log(`Currently working on port ${port}`);
})