const mysql = require('mysql');

// Create a connection object
const connection = mysql.createConnection({
    host: 'localhost',      // MySQL Workbench host
    user: 'root',           // Your MySQL username
    password: 'nyfa@27octP', // Your MySQL password
    database: 'injection', // Your MySQL database name
});

// Connect to MySQL
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.message);
        return;
    }
    console.log('Connected to MySQL Workbench!');
});

// Export the connection for use in other files
module.exports = connection;
