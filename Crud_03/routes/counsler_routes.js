const router = require("express").Router();
const { Counsler } = require( "../models" );


router.get("/", async (req, res) => {
 const result = await Counsler.findAll();
  console.log(result);
  res.render("Counsler/viewcls", { result, user: "Counsler" });
});

router.get("/login", (req, res) => {
  res.render("common/login", { msg: "" });
});

module.exports = router;
