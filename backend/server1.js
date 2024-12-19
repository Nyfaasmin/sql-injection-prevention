import express from 'express';
import mysql from 'mysql2';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

// Enable CORS for all origins or specify the frontend's URL
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3001', 
  methods: ['GET', 'POST'], 
  allowedHeaders: ['Content-Type', 'Authorization']  
}));

app.use(express.json());

// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'nyfa@27octP',
  database: 'injection',
});

db.connect((err) => {
  if (err) {
    console.error('Could not connect to MySQL:', err);
    process.exit(1);
  }
  console.log('Connected to MySQL');
});
app.post('/api/register', (req, res) => {
  const {username, password } = req.body;

  // Directly inserting user input into SQL query (unsafe)
  db.query(
    `INSERT INTO users (username, password) VALUES ( '${username}', '${password}')`,
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal server error' });
      }
      res.status(201).json({ message: 'User registered successfully' });
    }
  );
});

// Login route (Unsafe version)
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Vulnerable query: directly concatenating user input (could be exploited by SQL injection)
  db.query(
    `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`,
    (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal server error' });
      }
      if (results.length === 0) {
        return res.status(400).json({ message: 'Invalid username or password' });
      }

      const user = results[0];

      // In this example, there is no password hash comparison (no security)
      //const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET || 'your_jwt_secret', { expiresIn: '1h' });

      res.json({ message: 'Login successful' });
    }
  );
});

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
