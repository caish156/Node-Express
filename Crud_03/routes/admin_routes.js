const router = require("express").Router();

router.get("/login", async (req, res) => {
  const result = await Enquiry.findOne({});
  console.log(result);
  res.render("enquiry/viewenq", { result, user: "Admin" });
});

router.post("/login", async (req, res) => {
  const result = await Enquiry.create({
    id:"admin@1",
    name: "Anurag Puranik",
    mobile: "9826026390",
    email: "Anurag@gmail.com",
    password: "admin@123",
    role: "ADMIN",
  });
  console.log(result);
  res.render("admin/adminhome", { user: "Admin" });
});

router.post("/update", (req, res) => {
  console.log("admin email password update");
});

module.exports = router;

