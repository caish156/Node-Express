const router = require("express").Router();
const { Counsler } = require("../models");
const { Admin } = require("../models");
const { Student } = require("../models");
router.get("/", (req, res) => {
  res.render("common/home");
});
router.get("/login", (req, res) => {
  res.render("common/login", { msg: "" });
});

router.post("/login", async (req, res) => {
  const data = req.body;
 userlogin = data.key.substring(0, 3);
  console.log(userlogin);
  if ((userlogin == "adm")) {
    console.log("admin login");
    const userdata = await Admin.findOne({
      where: { id: data.key, password: data.password },
    });
    if (userdata) {
      console.log(userdata.id, userdata.name);
      req.session.user = {
        id: userdata.id,
        name: userdata.name,
        role: userdata.role,
      };
      res.render("common/dashboard", { user: req.session.user });
    } else {
      res.render("common/login", { msg: "login Failed" });
    }
  } else if ((userlogin == "csl")) {
    const userdata = await Counsler.findOne({
      where: { id: data.key, password: data.password },
    });
    if (userdata) {
      console.log(userdata.id, userdata.name);
      req.session.user = {
        id: userdata.id,
        name: userdata.name,
        role: userdata.role,
      };
      res.render("common/dashboard", { user: req.session.user });
    } else {
      res.render("common/login", { msg: "login Failed" });
    }
  } else {
    console.log("sy=tudent login");
    const userdata = await Student.findOne({
      where: { id: data.key, password: data.password },
    });
    if (userdata) {
      console.log(userdata.id, userdata.name);
      req.session.user = {
        id: userdata.id,
        name: userdata.name,
        role: userdata.role,
      };
      res.render("common/dashboard", { user: req.session.user });
    } else {
      res.render("common/login", { msg: "login Failed" });
    }
  }
} );

router.get( '/logout', ( req, res ) =>
{
  req.session.destroy()
  res.redirect("/")
})

module.exports = router;
