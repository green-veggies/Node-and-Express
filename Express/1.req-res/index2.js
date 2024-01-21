import express from "express";
const app=express();
const port=3000;

app.get("/student",(req,res)=>{
    res.send("All students");
})
app.post("/student",(req,res)=>{
    res.send("New Student added");
})
app.put("/student",(req,res)=>{
    res.send("Updated All students");
})
app.delete("/student",(req,res)=>{
    res.send("Student deleted");
})

app.route("/student").get((req,res)=>res.send("All students")).post((req,res)=>res.send("New Student added")).put((req,res)=>res.send("Student Updated")).delete((req,res)=>res.send("XDeletedX"));

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
})