import express from "express";
const router = express.Router();

let students = [
  { roll: 123, name: "hare", fees: 12875, Marks: 252 },
  { roll: 124, name: "khare", fees: 23232, Marks: 256 },
  { roll: 125, name: "mare", fees: 43433, Marks: 278 },
  { roll: 126, name: "bure", fees: 98364, Marks: 212 },
  { roll: 127, name: "jare", fees: 23478, Marks: 180 },
  { roll: 128, name: "jagdish", fees: 12345, Marks: 197 },
];
let sclass = [1,2,3,4,5]
router.use(express.urlencoded())

router.get("/", (req, res) => {
  res.render("student1");
});

router.get("/list", (req, res) => {
  res.render("list", {
    students, sclass
  });
});

router.post('/add', (req, res) => {
  const data = req.body
  students.push(data)
  res.redirect('/student/')
})

export default router;
