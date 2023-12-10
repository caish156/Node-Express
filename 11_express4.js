import express from "express";
import process from "process";
import dotenv from "dotenv";

// to resolve issue with __dirname if using ES6 module.
// const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config();
const server = express();
server.set("view engine", "ejs");
server.use(express.urlencoded());

server.get("/", (req, res) => {
  res.render("home");
  console.log('get "/" ');
});

// 1. recieve data by GET request
server.get("/addition", (req, res) => {
  const { fnum, snum } = req.query;
  let result = fnum + snum;
  res.render("result", {
    result,
    operation: "addition",
  });
});

// 2. recieve data by POST request
server.post("/multi", (req, res) => {
  const { fnum, snum } = req.body;
  let result = fnum * snum;
  res.render("result", {
    result,
    operation: "Multiplication",
  });
});

// 3. recieve data by Path
server.get("/minus/:x/:y", (req, res) => {
  const { x, y } = req.params;
  let result = x - y;
  res.render("result", {
    result,
    operation: "minus",
  });
});

server.listen(process.env.port, () => {
  console.log("server running on port " + process.env.port);
});
