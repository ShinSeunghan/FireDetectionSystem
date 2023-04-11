const Sequelize = require("sequelize");

class Device extends Sequelize.Model {
  static initiate(sequelize) {
    Device.init(
      {
        name: {
          type: Sequelize.STRING(45),
          allowNull: false,
          unique: true,
        },
        address: {
          type: Sequelize.STRING(100),
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "Device",
        tableName: "devices",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {}
}

module.exports = Device;
