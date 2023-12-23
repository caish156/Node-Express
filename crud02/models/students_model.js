import pool from "./dbconfig.js";
import timestamp from "./timestamp.js";

// route for login
function studentlogin(req, res) {
  res.render("login", { msg: "" });
  console.log(timestamp(), "GET : Render to login");
}

// route for register
function studentregister(req, res) {
  res.render("register", { msg: "" });
  console.log(timestamp(), "GET : Render to register");
}
// Add New Student
function studentAdd(req, res) {
  const data = req.body;
  pool.query(
    `insert into itstack_student values('${data.Roll}','${data.Name}','${data.Email}','${data.Mobile}','${data.Education}','${data.Course}','${data.Fname}','${data.City}','${data.Pincode}','${data.Password}');`,
    (error, results) => {
      if (error) {
        res.render("register", { msg: "Roll number Alredy Exists" });
        console.log(timestamp(), "POST : Registration Failed");
      } else {
        console.log(
          timestamp(),
          `POST : Registered Sucessfully, New User: '${data.Roll}','${data.Name}' `
        );
        res.render("register", { msg: "Registered Sucessfully" });
      }
    }
  );
}
function studentLogin(req, res) {
  const data = req.body;
  pool.query(
    `Select * from itstack_student WHERE roll = '${data.roll}' and password = '${data.password}';`,
    (error, results) => {
      if (results.rowCount == 1) {
        console.log(
          timestamp(),
          `POST : Login Success, User : ${results.rows[0].name}`
        );
        res.render("stu_dash", { data: results.rows[0] });
        console.log(timestamp(), "POST : Render to dashboard");
      } else {
        console.log(
          timestamp(),
          "POST : Login Failed ID password Doesn't match"
        );
        res.render("login", { msg: "Login Failed.." });
      }
    }
  );
}

export { studentlogin, studentregister, studentAdd, studentLogin };
