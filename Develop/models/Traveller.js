const { Sequelize, sequelize } = require('.');

const User = sequelize.define('User', {
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  // Add other fields as per your requirements
});

module.exports = User;
