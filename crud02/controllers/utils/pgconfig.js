import promptSync from "prompt-sync";
import dotenv from 'dotenv'
import fs from "fs";

const prompt = promptSync();
dotenv.config()

let pguser = prompt("Postgres User Name : ");
let pgpass = prompt("Postgres Password : ");
let dbname = prompt("Databse name : ");
let port = +prompt("Port Number for Server : ");

fs.writeFileSync(
  "./.env",
  `pguser = ${pguser} \npassword = ${pgpass} \ndbname = ${dbname} \nport = ${port}`,
  function (err) {
    if (err) throw err;
    console.log("Saved!");
  }
);

console.log(".env File written successfully\n");
