import express from "express";
const router = express.Router();
import {allStudents,createStudent,updateStudent,deleteStudent} from "../controllers/student.js";

router.get("/all",allStudents);
router.post("/create",createStudent);
router.put("/update",updateStudent);
router.delete("/delete",deleteStudent);


export default router;