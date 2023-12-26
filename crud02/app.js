import express, { response } from "express";
import dotenv from "dotenv";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import admin_routes from "./routes/admin_routes.js";
import batch_routes from "./routes/batch_routes.js";
import common_routes from "./routes/common_routes.js";
import enquiry_routes from "./routes/enquiry_routes.js";
import student_routes from "./routes/student_routes.js";
import counsler_routes from "./routes/counsler_routes.js";

const server = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

dotenv.config();

server.set("view engine", "ejs");
server.use(express.static(path.join(__dirname, "assets")));
server.use(express.urlencoded({ extended: true }));
server.use("/", common_routes);
server.use("/counsler", counsler_routes);
server.use("/student", student_routes);
server.use("/admin", admin_routes);
server.use("/enquiry", enquiry_routes);
server.use("/batch", batch_routes);
server.listen(process.env.port, () => {
  console.log("server listining on port " + process.env.port);
});
