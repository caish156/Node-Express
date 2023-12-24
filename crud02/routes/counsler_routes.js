import express from "express";
import { counslerLogin1 } from "../models/counsler_model.js";
const router = express.Router();

function counslerLogin ( data, res )
{
    console.log("routes")
  counslerLogin1(data, res);
}

export { counslerLogin };
