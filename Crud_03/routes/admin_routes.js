const router = require("express").Router();

router.get("/login", async(req, res) => {
  const result = await Enquiry.findOne( {
    
  });
  console.log(result);
  res.render("enquiry/viewenq", { result, user: "Admin" });
});
router.post("/update", (req, res) => {
  console.log("admin email password update");
});

module.exports = router;
