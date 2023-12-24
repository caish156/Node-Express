import pool from "./dbconfig.js";
import timestamp from "./timestamp.js";

function adminLogin1(data, res) {
  console.log("admin ka login");
  pool.query(
    `Select * from admin WHERE a_id = '${data.key}' and a_password = '${data.s_password}'`,
    (error, results) => {
      // console.log(results);
      if (results.rowCount == 1) {
        console.log(
          timestamp(),
          `POST : Login Success, Admin : ${results.rows[0].a_name}`
        );
        res.render("adm_dash", { data: results.rows[0] });
        console.log(timestamp(), "POST : Render to dashboard");
      } else {
        console.log(
          timestamp(),
          "POST : Login Failed admin ID password Doesn't match"
        );
        res.render("login", { msg: "Login Failed.." });
      }
    }
  );
}
export { adminLogin1 };
