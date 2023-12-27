
import timestamp from "./utils/timestamp.js";
import Students from "../models/index.cjs";
// route for login

// route for register
function studentregister(req, res) {
  res.render("register", { msg: "" });
  console.log(timestamp(), "GET : Render to register");
}
// Add New Student
async function studentAdd(req, res) {
  const formdata = req.body;
  let ts = Date.now();
  let date_ob = new Date(ts);
  const date = `${date_ob.getFullYear()}/${date_ob.getMonth()}/${date_ob.getDate()}`;
  console.log( date );
 
  // let s_roll = date + `${ formdata.s_name.substring( 0, 3 )}`;

let data = {
  s_roll : '023AT101',
  s_name: formdata.s_name,
  s_image: formdata.s_image || "",
  s_mobile: formdata.s_mobile,
  s_email: formdata.s_email || "",
  s_faname: formdata.s_faname,
  s_famobile: formdata.s_famobile,
  s_qualification: formdata.s_qualification,
  s_college: formdata.s_college || "",
  s_semsater: formdata.s_semsater || "",
  s_passout: formdata.s_passout || "",
  s_address: formdata.s_address || "",
  s_city: formdata.s_city || "",
  s_pincode: formdata.s_pincode,
  s_date: date,
  s_password: formdata.s_password,
  s_active: true,
  s_role: "s",
  };
  const query =  await Students.create(data)

    console.log(data)
  // pool.query(
  //   `insert into itstack_student values('${data.s_id}','${data.s_name}','${data.s_image}','${data.s_mobile}','${data.s_email}','${data.s_faname}','${data.s_famobile}','${data.s_qualification}','${data.s_college}','${data.s_semsater}','${data.s_passout}','${data.s_address}','${data.s_city}','${data.s_pincode}','${data.s_date}','${data.s_password}','${data.s_active}','${data.s_role}');`,
  //   (error, results) => {
  //     if (error) {
  //       res.render("register", { msg: "Roll number Alredy Exists" });
  //       console.log(timestamp(), "POST : Registration Failed", error);
  //     } else {
  //       console.log(
  //         timestamp(),
  //         `POST : Registered Sucessfully, New User: '${data.s_id}','${data.s_name}' `
  //       );
  //       res.render("register", { msg: "Registered Sucessfully" });
  //     }
  //   }
  // );
}
function studentLogin1(data, res) {
  pool.query(
    `Select * from student WHERE (s_roll = '${data.key}' or s_mobile ='${data.key}') and s_password = '${data.s_password}'`,
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
