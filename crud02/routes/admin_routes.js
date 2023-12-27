import express from "express";
import { saveEnquiry } from "../controllers/admin_model.js";
const router = express.Router();


let data = {
  a_name:'Admin'
}
router.get( "/enq", ( req, res ) =>
{
  res.render('admin/adm_enq', {data})
} )

router.post("/enquiry", saveEnquiry);

export  default router
