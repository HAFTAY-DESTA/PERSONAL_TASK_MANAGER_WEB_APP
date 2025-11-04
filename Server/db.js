// backend/db.js
import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",          // change if your MySQL user is different
  password: "Mysql@12345",  // your MySQL password
  database: "user_auth",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL Database ✅");
  }
});

export default db;
