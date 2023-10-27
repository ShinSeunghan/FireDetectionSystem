const Sequelize = require("sequelize");

class Device extends Sequelize.Model {
  static initiate(sequelize) {
    Device.init(
      {
        placeName: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING(50),
          primaryKey: true,
          allowNull: false,
        },
        sensor_temp: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        motor_state: {
          type: Sequelize.BOOLEAN,
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "Device",
        tableName: "device",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    db.Device.belongsTo(db.Place, {
      foreignKey: "placeName",
      targetKey: "name",
    });
  }
}

module.exports = Device;
