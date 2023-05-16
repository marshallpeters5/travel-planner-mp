const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Set the port for the server

// Set up the body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
