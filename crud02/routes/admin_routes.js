import express from "express";
import { adminLogin1, saveEnquiry } from "../models/admin_model.js";
const router = express.Router();

export function adminLogin(data, res) {
  adminLogin1(data, res);
}
let data = {
  a_name:'Admin'
}
router.get( "/enq", ( req, res ) =>
{
  res.render('admin/adm_enq', {data})
} )

router.post("/enquiry", saveEnquiry);

export  default router
