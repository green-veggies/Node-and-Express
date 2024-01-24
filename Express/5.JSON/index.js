import express from "express";
import products from "./products.js";
import userDetails from "./middlewares/logs.js";
const app = express();

app.use(userDetails);

app.get("/products",(req,res)=>{
    res.json(products);
});
app.get("/admin",(req,res)=>{
    res.send("Hello Admin");
});

app.listen(3000,()=>{
    console.log("App listening on port number 3000");
})