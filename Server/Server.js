// backend/server.js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mysql from "mysql2";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",   // database host
  user: "root",        // your MySQL username
  password: "Mysql@12345",        // your MySQL password (if any)
  database: "Task_management", // your database name
});

// Connect to MySQL
db.connect((err) => {
  if (err) throw err;
  console.log("✅ Connected to MySQL Database!");
});

// Register endpoint
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
  db.query(sql, [name, email, password], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Database error!" });
    }
    res.json({ message: "User registered successfully!" });
  });
});

// Login endpoint
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
  db.query(sql, [email, password], (err, results) => {
    if (err) return res.status(500).json({ message: "Database error" });
    if (results.length > 0) {
      res.json({ message: "Login successful" });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  });
});

app.listen(5000, () => console.log("🚀 Server running on port 5000"));
