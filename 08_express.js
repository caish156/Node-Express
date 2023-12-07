const express = require("express");

const server = express();
// send manual response for express.
server.get("/", (req, res) => {
  res.send("HOME PAGE");
});
server.get("/a", (req, res) => {
  res.send("HOME PAGE A");
});
server.get("/b", (req, res) => {
  res.send("HOME PAGE B");
});
server.get("/c", (req, res) => {
  res.send("HOME PAGE C");
});
server.get("/d", (req, res) => {
  res.send("HOME PAGE D");
});
server.get("/*", (req, res) => {
  res.send("404 Not Found");
});

server.listen(2424, () => {
  console.log("express staterd on Port 2424");
});
