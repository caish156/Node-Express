const router = require("express").Router();
const { Counsler } = require("../models");

// view all
router.get("/", async (req, res) => {
  const result = await Counsler.findAll();
  console.log(result);
  res.render("counsler/viewcls", { result, user: req.session.user });
});

// new entry
router.get("/add", async (req, res) => {
  res.render("counsler/addnew", { msg: "", user: req.session.user });
});

// save entry
router.post("/add", async (req, res) => {
  const result = await Counsler.findAll();

  const form = req.body;
  // console.log(form);
  let ts = Date.now();
  let date_ob = new Date(ts);
  const newcsl = `csl0${date_ob.getFullYear().toString().substring(2, 4)}${
    result.length + 101
  }`;
  console.log(newcsl);
  const register = await Counsler.create({
    id: newcsl,
    name: form.name,
    mobile: form.mobile,
    email: form.email,
    password: form.password,
    active: true,
    role: "Counsler",
  });

  res.render("counsler/addnew", {
    msg: `New Registration of ${register.role} with ID.${register.id}`,
    user: req.session.user,
  });
});

module.exports = router;
