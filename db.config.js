const Sequelize = require("sequelize");
const dbName = "customer";
const dbUser = "root";
const dbPassword = "";

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//models tables
db.customers = require("./customer.model")(sequelize, Sequelize);

module.exports = db;
