import express from "express";
import {
  studentregister,
  studentAdd,
  studentLogin1,
  studentcount,
} from "../controllers/students_model.js";

const router = express.Router();
router.use(express.urlencoded({ extended: true }));

export function studentLogin(data, res) {
  console.log("routes");
  studentLogin1(data, res);
}

router.get("/register", studentregister);
router.post("/add", studentAdd);
router.get("/count", studentcount);

export default router;
