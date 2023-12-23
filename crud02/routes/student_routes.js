import express from "express";
import {
  studentlogin,
  studentregister,
  studentAdd,
  studentLogin,
  studentcount,
} from "../models/students_model.js";

const router = express.Router();
router.use(express.urlencoded({ extended: true }));

router.get("/login", studentlogin);
router.get("/register", studentregister);
router.post("/add", studentAdd);
router.post( "/login", studentLogin );
router.get("/count", studentcount);

export default router;
