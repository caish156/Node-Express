// express with template Engine. EJS

import express from "express";
import timeStamp from "./timestamp.js";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

// to resolve issue with __dirname if using ES6 module.
const __dirname = dirname(fileURLToPath(import.meta.url));
const server = express();

// to set view engine as EJS
server.set("view engine", "ejs");

// to set path of static files like css & image files
server.use(express.static(path.join(__dirname, "assets")));

// get request to server
server.get("/", (req, res) => {
  res.render("index");

  // to provide info in console on every request with timestamp.
  console.log(timeStamp(), "GET ", "/home");
});
server.get("/about", (req, res) => {
  res.render("about");
  console.log(timeStamp(), "GET ", "/about");
  // console.log(req);
});
server.listen(2424, () => {
  console.log("Running on port 2424");
});
