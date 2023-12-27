import dotenv from "dotenv";
import pkg from "pg";

//  gather postgres info from user

dotenv.config();
//  create database connection
const { Pool } = pkg;

const pool = new Pool({
  user: process.env.pguser,
  password: process.env.password,
  host: "localhost",
  port: 5432, // default Postgres port
  database: process.env.dbname,
});




export default pool;
// 