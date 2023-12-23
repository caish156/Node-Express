import pkg from "pg";
const { Pool } = pkg;
import dotenv from "dotenv";
dotenv.config();

const pool = new Pool({
  user: "postgres",
  password: "Admin@1",
  host: "localhost",
  port: 5432, // default Postgres port
  database: "api",
});


export default pool;
