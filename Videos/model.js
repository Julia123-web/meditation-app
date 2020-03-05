const Sequelize = require("sequelize");
const sequelize = require("../db");
// const Users = require("../User/model");

const Videos = sequelize.define("videos", {
  title: {
    type: Sequelize.TEXT
  },
  video: {
    type: Sequelize.STRING
  }
});

// Videos.belongsTo(Users);
// Users.hasMany(Videos);
module.exports = Videos;
