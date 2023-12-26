import express from "express";
import { counslerLogin1 } from "../models/counsler_model.js";
const router = express.Router();


export function counslerLogin(data, res) {
  console.log("routes");
  counslerLogin1(data, res);
}

export default router;
