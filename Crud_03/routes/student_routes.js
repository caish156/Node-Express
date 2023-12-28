const { Student } = require("../models");

const router = require("express").Router();

router.get("/", (req, res) => {
  console.log("student");
});
router.get("/add", (req, res) => {
  res.render("student/addnew", { msg: "", user: req.session.user });
  console.log(req.body);
} );
router.get( "/view", async ( req, res ) =>
{
  const result = await Student.findAll();
  res.render("student/viewall", { result, user: req.session.user });

});

router.post("/add", async (req, res) => {
  const result = await Student.findAll();
  console.log(result.length);
  const form = req.body;
  // console.log(form);
  let ts = Date.now();
  let date_ob = new Date(ts);
  const newrole = `0${date_ob
    .getFullYear()
    .toString()
    .substring(2, 4)}${form.name.substring(0, 2).toUpperCase()}${form.mobile.substring(
    8,
    11
  )}${result.length + 101}`;
  console.log(newrole);
  const register = await Student.create({
    id: newrole,
    name: form.name,
    image: form.image,
    mobile: form.mobile,
    email: form.email,
    fa_name: form.fa_name,
    fa_mobile: form.fa_mobile,
    qualification: form.qualification,
    college: form.college,
    semster: form.semster,
    passout: form.passout,
    address: form.address,
    city: form.city,
    pincode: form.pincode,
    password: form.password,
    active: true,
    role: "Student",
  } );
  
   res.render("student/addnew", {
     msg: `New Registration for ${register.role} with Roll no.${register.id}`,
     user: req.session.user,
   });
});

module.exports = router;
