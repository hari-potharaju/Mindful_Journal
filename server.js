// server/server.js

const express = require('express'); //imports express which is node.js framework to build server
const cors = require('cors'); // imports cors package for frontend/backend communicatio

const app = express(); // creates instance of the express app
const PORT = process.env.PORT || 3001; // sets the port that the server will listen on

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('Hello!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

