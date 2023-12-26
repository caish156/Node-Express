import pool from "./utils/dbconfig.js";
import timestamp from "./utils/timestamp.js";

function saveEnquiry(req, res) {
  const formdata = req.body;
  let ts = Date.now();
  let date_ob = new Date(ts);
  const date = `${date_ob.getFullYear()}/${date_ob.getMonth()}/${date_ob.getDate()}`;

  pool.query(`Select * from enquiry`, (error, results) => {
    if (error) {
      console.log(error.message);
    } else {
      let count = results.rowCount;
      let e_id = `${date_ob.getFullYear().toString().substring(2, 4)}${date_ob
        .getMonth()
        .toString()
        .substring(0, 2)}${date_ob.getDate().toString().substring(0, 2)}enq${
        count + 1
      }`;
      console.log(e_id);
      console.log(date);
      pool.query(
        `insert into enquiry values('${e_id}','${formdata.e_name}','${formdata.e_mail}','${formdata.e_mobile}','${formdata.e_qualification}','${formdata.e_college}','${formdata.e_semster}','${formdata.e_course}','${date}',true);`,
        (error, results) => {
          if (error) {
            console.log("error in enquiry", error);
            console.log(timestamp(), "POST : Enquiry Failed");
          } else {
            console.log(
              timestamp(),
              `POST : Enquiry raised Sucessfully by ${formdata.e_name}  for  ${formdata.e_course}`
            );
            pool.query(
              `select * from enquiry where e_date = '${date}';`,
              (error, results) => {
                if (error) {
                  console.log(error.message);
                } else {
                  res.render("admin/adm_viewenq", {
                    data: { a_name: "admin", enq: results.rows },
                  });
                }
              }
            );
          }
        }
      );
    }
  });
}
export {saveEnquiry}