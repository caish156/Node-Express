import pool from "./dbconfig.js";
import timestamp from "./timestamp.js";

// route for login


// route for register
function studentregister(req, res) {
  res.render("register", { msg: "" });
  console.log(timestamp(), "GET : Render to register");
}
// Add New Student
function studentAdd(req, res) {
  const formdata = req.body;
  let ts = Date.now();
  let date_ob = new Date(ts);
  const date = `${date_ob.getFullYear()}/${date_ob.getMonth()}/${date_ob.getDate()}`;

  let data = {};

  data.s_id = formdata.s_id;
  data.s_name = formdata.s_name;
  data.s_image = formdata.s_image || "";
  data.s_mobile = formdata.s_mobile;
  data.s_email = formdata.s_email || "";
  data.s_faname = formdata.s_faname;
  data.s_famobile = formdata.s_famobile;
  data.s_qualification = formdata.s_qualification;
  data.s_college = formdata.s_college || "";
  data.s_semsater = formdata.s_semsater || "";
  data.s_passout = formdata.s_passout || "";
  data.s_address = formdata.s_address || "";
  data.s_city = formdata.s_city;
  data.s_pincode = formdata.s_pincode;
  data.s_date = date;
  data.s_password = formdata.s_password;
  data.s_active = true;
  data.s_role = "s";
  console.log(date);
  pool.query(
    `insert into itstack_student values('${data.s_id}','${data.s_name}','${data.s_image}','${data.s_mobile}','${data.s_email}','${data.s_faname}','${data.s_famobile}','${data.s_qualification}','${data.s_college}','${data.s_semsater}','${data.s_passout}','${data.s_address}','${data.s_city}','${data.s_pincode}','${data.s_date}','${data.s_password}','${data.s_active}','${data.s_role}');`,
    (error, results) => {
      if (error) {
        res.render("register", { msg: "Roll number Alredy Exists" });
        console.log(timestamp(), "POST : Registration Failed", error);
      } else {
        console.log(
          timestamp(),
          `POST : Registered Sucessfully, New User: '${data.s_id}','${data.s_name}' `
        );
        res.render("register", { msg: "Registered Sucessfully" });
      }
    }
  );
}
function studentLogin1(data, res) {
   // admin login
  // if (user == "Adm") {
  //   pool.query(
  //     `Select * from admin WHERE a_id = '${data.key}' and a_password = '${data.s_password}'`,
  //     (error, results) => {
  //       // console.log(results);
  //       if (results.rowCount == 1) {
  //         console.log(
  //           timestamp(),
  //           `POST : Login Success, Admin : ${results.rows[0].a_name}`
  //         );
  //         res.render("adm_dash", { data: results.rows[0] });
  //         console.log(timestamp(), "POST : Render to dashboard");
  //       } else {
  //         console.log(
  //           timestamp(),
  //           "POST : Login Failed admin ID password Doesn't match"
  //         );
  //         res.render("login", { msg: "Login Failed.." });
  //       }
  //     }
  //   );
  // }
  // Counsler login
  // else if (user == "csl") {
  //   pool.query(
  //     `Select * from counsler WHERE c_id = '${data.key}' and c_password = '${data.s_password}'`,
  //     (error, results) => {
  //       // console.log(results);
  //       if (results.rowCount == 1) {
  //         console.log(
  //           timestamp(),
  //           `POST : Login Success, counsler : ${results.rows[0].c_name}`
  //         );
  //         res.render("csl_dash", { data: results.rows[0] });
  //         console.log(timestamp(), "POST : Render to dashboard");
  //       } else {
  //         console.log(
  //           timestamp(),
  //           "POST : Login Failed csl ID password Doesn't match"
  //         );
  //         res.render("login", { msg: "Login Failed.." });
  //       }
  //     }
  //   );
  // } else {
  pool.query(
    `Select * from itstack_student WHERE (s_id = '${data.key}' or s_mobile ='${data.key}') and s_password = '${data.s_password}'`,
    (error, results) => {
      // console.log(results);
      if (results.rowCount == 1) {
        console.log(
          timestamp(),
          `POST : Login Success, User : ${results.rows[0].s_name}`
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

function studentcount(req, res) {
  pool.query(`Select * from itstack_student;`, (error, results) => {
    if (error) {
      console.log(timestamp(), "GET : Student count failed", error.message);
      res.send({ rows: 999 });
    } else {
      console.log(timestamp(), "GET : Student count");
      res.send({ rows: results.rowCount });
    }
  });
}

export { studentregister, studentAdd, studentLogin1, studentcount };
