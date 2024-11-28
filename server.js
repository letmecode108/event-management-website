const express = require("express");
const multer = require("multer");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const mysql = require("mysql2");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// MySQL Connection
const db = mysql.createConnection({
  host: "localhost", // Change to your database host if necessary
  user: "root", // Replace with your MySQL username
  password: "Asdfgh@#$123", // Replace with your MySQL password
  database: "eventDB", // The database we created earlier
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL Database!");
});

// Multer for File Uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

// Routes
// Handle Form Submission
app.post("/register", upload.single("screenshot"), (req, res) => {
  const { name, email, regNumber, gender, phone, payment } = req.body;
  const screenshot = req.file ? req.file.path : null;

  const sql = `INSERT INTO registrations (name, email, regNumber, gender, phone, payment, screenshot)
               VALUES (?, ?, ?, ?, ?, ?, ?)`;

  db.query(sql, [name, email, regNumber, gender, phone, payment, screenshot], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to register!" });
    } else {
      res.status(201).json({ message: "Registration successful!" });
    }
  });
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
