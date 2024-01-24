import express from "express";
import {join} from "path";
const app = express();
const port  = 3000;

app.set("view engine","ejs")

app.use(express.static(join(process.cwd(),"public")));

app.listen(port,()=>{
    console.log("Listening to port 3000");
})