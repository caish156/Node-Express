import express from "express";

const router = express.Router();

// get "/ " to view all batch
router.get("/", (req, res) => {
  console.log("batch get");
});

// get "/active " to view active batch
router.get("/active", (req, res) => {});

// get "/old " to view old or inactive batch
router.get("/old", (req, res) => {});

// post "/search " to search batch by name, time or course
router.post("/search", (req, res) => {});

// post "/add " to add new batch
router.post("/add", (req, res) => {});

export default router;
