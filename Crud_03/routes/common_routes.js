const router = require("express").Router();
const { Counsler } = require("../models");
const { Admin } = require("..models");
const { Student } = require("..models");
router.get("/", (req, res) => {
  res.render("common/home");
});
router.get("/login", (req, res) => {
  res.render("common/login", { msg: "" });
});

router.post("/login", (req, res) => {
  const data = req.body;
  user = data.id.substring(0, 3);
  if ((user = "adm")) {
    const userdata = Admin.findOne({
      where,
    });
  } else if ((user = "csl")) {
    const userdata = Counsler.findOne({
      where,
    });
  } else
  {
    const userdata = Student.findOne( {
      
    })
  }
});

module.exports = router;
