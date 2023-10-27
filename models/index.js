const Sequelize = require("sequelize");
const Device = require("./device");
const Place = require("./place");
//const env = process.env.NODE_ENV || "development";
const env = "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;

db.Device = Device;
db.Place = Place;

Device.initiate(sequelize);
Place.initiate(sequelize);

Device.associate(db);
Place.associate(db);

module.exports = db;
