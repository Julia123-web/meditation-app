const Sequelize = require("sequelize");

const databaseUrl =
  process.env.DATABASE_URL ||
  "postgres://ffehpvvjeirjtm:83d72a4c3f3fc9b52a393f4a3cd06b68925bb8ea1c29f97815aac023dffe602f@ec2-54-217-204-34.eu-west-1.compute.amazonaws.com:5432/df504uin6i9dfc";

const db = new Sequelize(databaseUrl, {
  dialectOptions: {
    ssl: true,
  },
});

db.sync({ force: false })
  .then(() => console.log("Database updated"))
  .catch(console.error);

module.exports = db;
