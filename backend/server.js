import express from 'express';
import mysql from 'mysql2';

import dotenv from 'dotenv';
import cors from 'cors';  // Import CORS

dotenv.config();

const app = express();

// Enable CORS for all origins or specify the frontend's URL
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000', // Allow specified origin
  methods: ['GET', 'POST'],  // Allow only GET and POST requests
  allowedHeaders: ['Content-Type', 'Authorization']  // Allow specific headers
}));

app.use(express.json());

// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password:'nyfa@27octP',  // Use environment variables for sensitive data
  database: 'injection',
});

db.connect((err) => {
  if (err) {
    console.error('Could not connect to MySQL:', err);
    process.exit(1);
  }
  console.log('Connected to MySQL');
});

// Register route
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if username already exists
    db.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
      if (err) {
        return res.status(500).json({ message: 'Database error during username check' });
      }

      if (results.length > 0) {
        return res.status(400).json({ message: 'username is already registered' });
      }

      
      // Insert new user into the database
      db.query(
        'INSERT INTO users (username, password) VALUES (?, ?)',
        [username, password],
        (err, result) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal server error' });
          }
          res.status(201).json({ message: 'User registered successfully' });
        }
      );
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error while registering user' });
  }
});

// Login route
app.post('/api/login', (req, res) => {
  const {username , password } = req.body;

  db.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Database error during login' });
    }
    //console.log(results);
    if (results.length === 0) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }


    const user = results[0];
    const usern=user.username;
    const pass1=user.password;

    if (pass1!=password) {
      return res.status(400).json({ message: 'Invalid username and password' });
    }


    return res.status(200).json({ message: 'Login successful' });
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
