import express from "express";
import dotenv from "dotenv";
import studentroutes from "./routes/studentroutes.js";
import timestamp from "../timestamp.js";

const server = express();
server.set("view engine", "ejs");
dotenv.config();

server.get("/", (req, res) => {
  res.render("home");
  console.log(timestamp(), "Get /home");
});

server.use("/student", studentroutes);

// pool
//   .connect()
//   .then(() => {
//     console.log("db Connected");
//     server.listen(process.env.port, () => {
//       console.log(`server is running on port ${process.env.port}`);
//     });
//   })
//   .catch((error) => console.log(error));
server.listen(process.env.port, () => {
  console.log(timestamp(), `server is running on port ${process.env.port}`);
});
