import express from "express";
import pool from "../dbconfig.js";
import timestamp from "../timestamp.js";

const router = express.Router();
router.use(express.urlencoded());

router.get("/", (req, res) => {
  res.render("student");
  console.log(timestamp(), "Get /student");
});

router.post("/save", (req, res) => {
  const data = req.body;
  console.log(data);
  // { roll: '123', name: 'sdsds', fname: 'sasas', marks: '1234' }

  pool
    .connect()
    .then(
      pool.on("connect", () => {
        console.log("database connected sucessfully");
      })
    )
    .then(
      pool.query(
        `CREATE TABLE IF NOT EXISTS student (
  roll varchar(10),
  name varchar(20),
  fname varchar(20),
  marks int
  );`
      )
    )
    .then(
      pool.query(
        `INSERT INTO student VALUES (${data.roll},'${data.name}','${data.fname}',${data.marks});`
      )
    )
    .then(console.log("data saved"));

  res.redirect("/student");
});

router.get("/record", (req, res) => {
  pool.query("select * from student", (err, data, fields) => {
    console.log(data.rows);
    res.render("records", { data: data.rows });
  });
  console.log(timestamp(), "Get /student/record");
});

export default router;
