import express, { response } from "express";
import dotenv from "dotenv";
import student_routes from "./routes/student_routes.js";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import timestamp from "./models/timestamp.js";
import { adminLogin } from "./routes/admin_routes.js";
import { counslerLogin } from "./routes/counsler_routes.js";
import { studentLogin } from "./routes/student_routes.js";

const server = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

dotenv.config();

server.set("view engine", "ejs");
server.use(express.static(path.join(__dirname, "assets")));
server.use(express.urlencoded({ extended: true }));

server.get("/", (req, res) => {
  res.render("home");
  console.log(timestamp(), "GET : Welcome to HomePage");
});

server.get("/login", (req, res) => {
  res.render("login", { msg: "" });
  console.log(timestamp(), "GET : Render to login");
});

server.post("/login", (req, res) => {
  const data = req.body;
  console.log(data);
  let user = data.key.substring(0, 3);

  // admin login
  if (user == "Adm") {
    adminLogin(data, res);
  } else if (user == "cls") {
    counslerLogin(data, res);
  } else {
    studentLogin(data, res);
  }
});

server.use("/student", student_routes);

server.listen(process.env.port, () => {
  console.log("server listining on port " + process.env.port);
});
