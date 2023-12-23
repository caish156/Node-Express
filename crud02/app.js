import express, { response } from "express";
import dotenv from "dotenv";
import student_routes from "./routes/student_routes.js";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import timestamp from "./models/timestamp.js";

const server = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

dotenv.config();

server.set("view engine", "ejs");
server.use(express.static(path.join(__dirname, "assets")));
server.use(express.urlencoded({ extended: true }));

server.get("/", (req, res) => {
  res.render( "home" );
  console.log(timestamp(), "GET : Welcome to HomePage");
});

server.post("/add", (req, res) => {
  const data = req.body;
  console.log(data);
  // res.redirect("/")
});

server.use("/student", student_routes);

server.listen(process.env.port, () => {
  console.log("server listining on port " + process.env.port);
});
