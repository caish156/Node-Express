import express from "express";
import {
  studentlogin,
  studentregister,
  studentAdd,
  studentLogin,
} from "../models/students_model.js";

const router = express.Router();
router.use(express.urlencoded({ extended: true }));

router.get("/login", studentlogin);
router.get("/register", studentregister);
router.post("/add", studentAdd);
router.post("/login", studentLogin);

export default router;
