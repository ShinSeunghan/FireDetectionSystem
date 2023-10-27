const Sequelize = require("sequelize");

class Place extends Sequelize.Model {
  static initiate(sequelize) {
    Place.init(
      {
        name: {
          type: Sequelize.STRING(50),
          primaryKey: true,
          allowNull: false,
        },
        address: {
          type: Sequelize.STRING(45),
          allowNull: false,
        },
        remark: {
          type: Sequelize.STRING(45),
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "Place",
        tableName: "place",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    db.Place.hasMany(db.Device, { foreignKey: "placeName", sourceKey: "name" });
  }
}

module.exports = Place;
