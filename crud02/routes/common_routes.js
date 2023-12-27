import express from "express";

import { homePage, loginPage, login } from "../controllers/common_model.js";

const router = express.Router();

router.get("/", homePage);

router.get("/login", loginPage);

router.post("/login", login);

export default router;
