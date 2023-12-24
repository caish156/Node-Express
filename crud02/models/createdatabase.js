import pool from "./dbconfig.js";
function databasecreater() {
  pool.connect();
  //1 create student table
  pool.query(
    `CREATE TABLE IF NOT EXISTS itstack_student (
        s_id VARCHAR(9) NOT NULL UNIQUE PRIMARY KEY,
        s_name VARCHAR(50) NOT NULL,
        s_image VARCHAR (100),
        s_mobile VARCHAR (10) NOT NULL,
        s_email VARCHAR (50) ,
        s_faname VARCHAR (50) NOT NULL,
        s_famobile VARCHAR (10) NOT NULL,
        s_qualification VARCHAR (10) NOT NULL,
        s_college VARCHAR (50),
        s_semsater VARCHAR (1),
        s_passout  VARCHAR (4),
        s_address VARCHAR (100),
        s_city varchar(20) NOT NULL,
        s_pincode varchar(8) NOT NULL,
        s_date date NOT NULL,
        s_password VARCHAR (20) NOT NULL,
        s_active BOOLEAN  NOT NULL,
        s_role VARCHAR (1) NOT NULL   

  );`,
    (error, results) => {
      if (error) {
        console.log(error);
      } else console.log("Table Created: - Itstack_student");
    }
  );
  //2 create enquiry table
  pool.query(
    `CREATE TABLE IF NOT EXISTS enquiry
(   e_id varchar NOT NULL UNIQUE PRIMARY KEY,
    e_name varchar (20) NOT NULL,
    e_mail varchar (30)  NOT NULL,
    e_mobile varchar (10) NOT NULL,
    e_qualification varchar(10),
    e_college varchar(10),
    e_semster varchar(1),
    e_course varchar (20) NOT NULL,
    e_date date NOT NULL,
    e_active BOOLEAN  NOT NULL
);`,
    (error, results) => {
      if (error) {
        console.log(error);
      } else console.log("Table Created: - Enquiry");
    }
  );
  //3 create course table
  pool.query(
    `CREATE TABLE IF NOT EXISTS course
(   C_name varchar(10) NOT NULL UNIQUE PRIMARY KEY,
    C_duration int NOT NULL,
    C_totalfees int  NOT NULL,
    C_syllabus varchar (100),
    C_active varchar(10)
    
);`,
    (error, results) => {
      if (error) {
        console.log(error);
      } else console.log("Table Created: - Course");
    }
  );
  //4 create S_course table
  pool.query(
    `CREATE TABLE IF NOT EXISTS S_course
(   SC_stuid varchar(20) NOT NULL REFERENCES itstack_student(s_id),
    SC_course varchar (30)  NOT NULL REFERENCES course(C_name),
    SC_batchid varchar (10) REFERENCES batch(B_id),
    SC_startdate varchar(10),
    SC_enddate varchar(10),
    SC_active BOOLEAN NOT NULL
);`,
    (error, results) => {
      if (error) {
        console.log(error);
      } else console.log("Table Created: - S_course");
    }
  );
  //5 create batch table
  pool.query(
    `CREATE TABLE IF NOT EXISTS batch
(   B_id varchar(10) NOT NULL UNIQUE PRIMARY KEY,
    B_course varchar(10) NOT NULL REFERENCES course(C_name),
    B_timing TIME NOT NULL,
    B_strength int,
    B_faculty varchar(10),
    B_startdate date NOT NULL,
    B_enddate date,
    B_active BOOLEAN DEFAULT true NOT NULL
);`,
    (error, results) => {
      if (error) {
        console.log(error);
      } else console.log("Table Created: - Batch");
    }
  );
  //6 create fees table
  pool.query(
    `CREATE TABLE IF NOT EXISTS fees
(   F_slipno varchar(10) PRIMARY KEY,
    F_stuid varchar(20) NOT NULL REFERENCES itstack_student(s_id),
    F_stuc varchar(10) NOT NULL REFERENCES course(C_name),
    F_paid int NOT NULL,
    F_discount int,
    F_date date NOT NULL
    
);`,
    (error, results) => {
      if (error) {
        console.log(error);
      } else console.log("Table Created: - Fees");
    }
  );
  //7 create Admin table
  pool.query(
    `CREATE TABLE IF NOT EXISTS Admin
(   A_id varchar(10) NOT NULL UNIQUE PRIMARY KEY,
    A_name varchar(20) NOT NULL,
    A_mail varchar(30) NOT NULL,
    A_mobile varchar(10) NOT NULL,
    A_password  varchar(16)  NOT NULL
);`,
    (error, results) => {
      if (error) {
        console.log(error);
      } else console.log("Table Created: - ADMIN");
    }
  );
  //8 create Counsler table
  pool.query(
    `CREATE TABLE IF NOT EXISTS Counsler
(   C_id varchar(10) NOT NULL UNIQUE PRIMARY KEY,
    C_name varchar(20) NOT NULL,
    C_mail varchar(30) NOT NULL,
    C_mobile varchar(10) NOT NULL,
    C_password  varchar(16)  NOT NULL
);`,
    (error, results) => {
      if (error) {
        console.log(error);
      } else console.log("Table Created: - Counsler");
      process.exit();
    }
  );
}

databasecreater();
