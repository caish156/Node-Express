const express = require("express");
const fs = require("fs");
const path = require("path");

// send responce via static html pages
const server = express();

server.get("/", (req, res) => {
  let pagedata = fs.readFileSync(
    path.join(__dirname, "/assets/01.html"),
    "utf-8"
  );
  res.send(pagedata);
});

server.listen(2424, () => {
  console.log("Server started on Port 2424");
});
