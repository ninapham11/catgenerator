// Import required modules
const express = require('express');  // Provides web framework functionality
const path = require('path');        // Provides file path manipulation utilities

// Create an Express application instance
const app = express();

// Set the port number to listen on (default 3000)
const port = process.env.PORT || 3000;  // Use environment variable or default

// Configure EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));   // Set the directory containing EJS templates

// Middleware to serve static files (CSS, JS, images) from the current directory
app.use(express.static(path.join(__dirname)));

// Route handler for the root path ('/')
app.get('/', (req, res) => {
  // Render the 'index' EJS template and pass data (title)
  res.render('index', { title: 'Nina\'s Website' });
});

// Start the server and log a message
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
