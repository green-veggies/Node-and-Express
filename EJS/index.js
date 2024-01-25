import express from "express";
import route from "./routes/route.js"
const app = express();
const port  = 3000;

app.set("view engine","ejs")
app.use("/",route);

app.listen(port,()=>{
    console.log("Listening to port 3000");
})