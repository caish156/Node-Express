// Now we learn how to set multiple routes with routes

import express from "express";
import dotenv from "dotenv";
import stdroutes from "./routers/studentrouters.js";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const server = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config();
server.set("view engine", "ejs");
server.use(express.static(path.join(__dirname, "assets")));

server.get("/", (req, res) => {
  res.render("home");
  console.log(path, __dirname)
});

server.use("/student", stdroutes);

server.listen(process.env.port, () => {
  console.log("server listning on port " + process.env.port);
});
