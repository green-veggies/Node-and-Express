import express from "express";
const app = express();

app.get("/products",(req,res)=>{
    console.log(req.query);
    const {category,id} = req.query;   
    res.send(`The product category is ${category} and product id is ${id}`);
})
app.listen(3000,()=>{
    console.log("App listening on port number 3000");
})