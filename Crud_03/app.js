const express = require("express");
const server = express();
const path = require("path");
const common_routes = require("./routes/common_routes");
const enquiry_routes = require( "./routes/enquiry_routes" );
const counslers_routes = require("./routes/counsler_routes")

server.use(express.urlencoded({ extended: true }));
server.set("view engine", "ejs");
server.use(express.static(path.join(__dirname, "assets")));

server.use("/", common_routes);
server.use("/enquiry", enquiry_routes);
server.use("/counslers", counslers_routes);

server.listen(5858, () => {
  console.log("server listning on Port 5858");
});
