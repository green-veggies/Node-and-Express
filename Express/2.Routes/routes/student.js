import express from "express";
const router = express.Router();

router.get("/all",(req,res)=>{
    res.send("All student list");
});
router.post("/create",(req,res)=>{
    res.send("Sign in new student");
});
router.put("/update",(req,res)=>{
    res.send("Update student data");
});
router.delete("/remove",(req,res)=>{
    res.send("Remove the student");
});
export default router;