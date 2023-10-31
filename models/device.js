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
        sensorTemp: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        isPerson: {
          type: Sequelize.BOOLEAN,
          allowNull: true,
        },
        motorState: {
          type: Sequelize.BOOLEAN,
          allowNull: true,
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
