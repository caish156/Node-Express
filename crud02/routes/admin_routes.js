import express from "express";
import { adminLogin1 } from "../models/admin_model.js";
const router = express.Router();

function adminLogin(data, res) {
  adminLogin1(data, res);
}

export { adminLogin };
