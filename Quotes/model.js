const Sequelize = require("sequelize");
const sequelize = require("../db");
// const Users = require("../User/model");

const Quotes = sequelize.define("quotes", {
  quotes: {
    type: Sequelize.STRING
  }
});

// Quotes.belongsTo(Users);
// Users.hasMany(Quotes);
module.exports = Quotes;
