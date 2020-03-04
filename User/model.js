const Sequelize = require("sequelize");
const sequelize = require("../db");

const User = sequelize.define("user", {
  name: {
    type: Sequelize.STRING,
    allownul: false,
    unique: true
  },

  email: {
    type: Sequelize.STRING,
    allownul: false,
    unique: true
  },

  password: {
    type: Sequelize.STRING,
    allownul: false
  }
});
module.exports = User;
