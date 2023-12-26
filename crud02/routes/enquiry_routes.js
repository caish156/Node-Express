import express from "express";

const router = express.Router();

// get "/ " to view all enquiry
router.get("/", (req, res) => {});

// get "/active " to view active enquiry
router.get("/active", (req, res) => {});

// get "/old " to view old or inactive enquiry
router.get("/old", (req, res) => {});

// post "/search " to search enquiry by name, city or course 
router.post( "/search", ( req, res ) => { } );

// post "/add " to add new enquiry course 
router.post("/add", (req, res) => {});

export default router