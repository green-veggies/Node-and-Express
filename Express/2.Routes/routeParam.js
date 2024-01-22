import express from "express";
const app = express();
const port = 3000;

//  1) Basic of params
// app.get("/stu/delete/:id",(req,res)=>{
//     res.send(`Student number ${req.params.id} deleted`);
// });

//  2)
// app.get("/ecom/iphone/:model",(req,res)=>{
//     res.send(`Your iPhone ${req.params.model} Pro Max is ready to ship`);
// })

// 3) Multiple params
app.get("/ecom/products/:category/:name",(req,res)=>{
    const {category,name} = req.params;
    res.send(`${name} in ${category} category is available!`);
})




app.listen(port,()=>{
    console.log(`Currently working on port ${port}`);
})