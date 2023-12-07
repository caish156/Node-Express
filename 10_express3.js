// express with template Engine. EJS

const express = require("express");
const server = express();
const timestamp = require('./timestamp.js')








server.set("view engine", "ejs");

server.get("/", (req, res) => {
    res.render("index");
     console.log(timestamp, "get/home");
});
server.get("/about", (req, res) => {
    res.render("about");
    console.log(timestamp, "get/about");
});
server.listen(2424, () => {
  console.log("Running on port 2424");
});
