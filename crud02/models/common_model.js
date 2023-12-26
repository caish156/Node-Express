import timestamp from "./utils/timestamp.js";
import { adminLogin1 } from "./admin_model.js";
import { counslerLogin1 } from "./counsler_model.js";
import { studentLogin1 } from "./students_model.js";

function homePage(req, res) {
  res.render("common/home");
  console.log(timestamp(), "GET : Welcome to HomePage");
}

function loginPage(req, res) {
  res.render("login", { msg: "" });
  console.log(timestamp(), "GET : Render to login");
}
function login(req, res) {
  const data = req.body;
  let user = data.key.substring(0, 3);
  if (user == "Adm") {
    adminLogin1(data, res);
  } else if (user == "cls") {
    counslerLogin1(data, res);
  } else {
    studentLogin1(data, res);
  }
}

export { homePage, loginPage, login };
