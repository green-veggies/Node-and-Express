import express from "express";
import students from "./routes/student.js";
const app = express();
const port = 3000;

app.use("/student",students);


app.listen(port,()=>{
    console.log(`Port listening to ${port}`)
})