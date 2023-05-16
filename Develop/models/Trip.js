const { Sequelize, sequelize } = require('../models');

const Trip = sequelize.define('Trip', {
  location: {
    type: Sequelize.STRING,
    allowNull: false
  },
  // Add other fields as per your requirements
});

module.exports
