// // Import the express module
// const express = require('express');

// // Create an instance of express
// const app = express();

// // Serve the HTML page when accessing the root route
// app.get('/', (req, res) => {
//     res.send('<!DOCTYPE html><html><head><title>Simple Node App</title></head><body><h1>Hello, World!</h1></body></html>');
// });

// // Set the port number (3000 for local development)
// const PORT = process.env.PORT || 3000;

// // Start the server and listen for incoming requests
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });
// Import required modules
const express = require('express');
const { Client } = require('pg'); // Import PostgreSQL client

// Create an instance of express
const app = express();

// Set up the PostgreSQL client with your database credentials
const client = new Client({
  host: "sql12.freemysqlhosting.net"	,     // Database host (e.g., Render environment variable)
  port: "3306",     // Database port (e.g., Render environment variable)
  user: "sql12751277",     // Database username (e.g., Render environment variable)
  password: "xaWEGdfZC7", // Database password (e.g., Render environment variable)
  database: "sql12751277"  // Database name (e.g., Render environment variable)
});

// Connect to the PostgreSQL database
client.connect();

// Serve the HTML page when accessing the root route
app.get('/', (req, res) => {
    res.send('<!DOCTYPE html><html><head><title>Simple Node App</title></head><body><h1>Hello, World!</h1></body></html>');
});

// Fetch customers data from the database when accessing the '/customers' route
app.get('/customers', async (req, res) => {
    try {
        const result = await client.query('SELECT * FROM customers');
        res.json(result.rows); // Send the list of customers as JSON response
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching customers');
    }
});

// Set the port number (3000 for local development)
const PORT = process.env.PORT || 3000;

// Start the server and listen for incoming requests
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
