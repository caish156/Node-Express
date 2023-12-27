import pool from "./utils/dbconfig.js";
import timestamp from "./utils/timestamp.js";

function counslerLogin1(data, res) {
  console.log("counsler ka login");
  pool.query(
    `Select * from counsler WHERE c_id = '${data.key}' and c_password = '${data.s_password}'`,
    (error, results) => {
      // console.log(results);
      if (results.rowCount == 1) {
        console.log(
          timestamp(),
          `POST : Login Success, counsler : ${results.rows[0].c_name}`
        );
        res.render("csl_dash", { data: results.rows[0] });
        console.log(timestamp(), "POST : Render to dashboard");
      } else {
        console.log(
          timestamp(),
          "POST : Login Failed csl ID password Doesn't match"
        );
        res.render("login", { msg: "Login Failed.." });
      }
    }
  );
}
export { counslerLogin1 };
