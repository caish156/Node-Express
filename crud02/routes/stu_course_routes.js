import express from "express";

const router = express.Router();

// post "/ " to view all stu-course
router.post("/getbystudent", (req, res) => {
  console.log("stu-course get");
});

// get "/active " to view active stu-course
router.get("/active", (req, res) => {});

// get "/old " to view old or inactive stu-course
router.get("/old", (req, res) => {});

// post "/search " to search stu-course by name, time or course
router.post("/search", (req, res) => {});

// post "/add " to add new stu-course
router.post("/add", (req, res) => {});

export default router;
