const router = require("express").Router();
const { Enquiry } = require("../models");

router.get("/", async (req, res) => {
  const result = await Enquiry.findAll();
  console.log(result);
  res.render("enquiry/viewenq", { result, user: "Admin" });
});

router.post("/add", async (req, res) => {
  const data = req.body;
  console.log(data);
  const result = await Enquiry.create({
    name: data.name,
    mail: data.mail,
    mobile: data.mobile,
    course: data.course,
    active: true,
  });
  res.redirect("/");
});

// router.get("/active", async (req, res) => {
//   const data = req.body;
//   console.log(data);
//   const result = await Enquiry.create({
//    where
//   });
//   res.redirect("/");
// });

module.exports = router;
