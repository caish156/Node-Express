const express = require("express");
const server = express();
const path = require("path");
const session = require("express-session");
const common_routes = require("./routes/common_routes");
const enquiry_routes = require("./routes/enquiry_routes");
const counslers_routes = require("./routes/counsler_routes");
const student_routes = require("./routes/student_routes");

// body-parser, ejs & assets
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, "assets")));
server.set("view engine", "ejs");
server.use(
  session({
    secret: "tu&8w8nsundcsu % sso909os9w",
    resave: true,
    saveUninitialized: false,
    // cookie: { secure: true },
  })
);
// routes
server.use("/", common_routes);
server.use("/enquiry", enquiry_routes);
server.use( "/counslers", counslers_routes );
server.use('/student',student_routes )

server.listen(5858, () => {
  console.log("server listning on Port 5858");
});
