// Import the MySQL module
const mysql = require('mysql2');
const express = require('express');
const app = express();
const port = 3000;

// Database connection configuration
const dbConfig = {
  host: 'sql12.freemysqlhosting.net', // Replace with your database host
  user: 'sql12751277',      // Replace with your database username
  password: 'xaWEGdfZC7', // Replace with your database password
  database: 'sql12751277' // Replace with your database name
};

// Create a connection to the database
const connection = mysql.createConnection(dbConfig);

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

// Route to fetch data from the customers table
app.get('/customers', (req, res) => {
  const query = 'SELECT * FROM vendors';

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Error fetching data');
      return;
    }

    res.json(results);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
