const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Import the models
const User = require('./models/Traveller');
const Trip = require('./models/Trip');

// Set up the body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Import the routes
const travellersRoutes = require('./routes/travellers');

// Use the routes
app.use('/api/travellers', travellersRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
