// Import the express module
const express = require('express');

// Create an instance of express
const app = express();

// Serve the HTML page when accessing the root route
app.get('/', (req, res) => {
    res.send('<!DOCTYPE html><html><head><title>Simple Node App</title></head><body><h1>Hello, World!</h1></body></html>');
});

// Set the port number (3000 for local development)
const PORT = process.env.PORT || 3000;

// Start the server and listen for incoming requests
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
