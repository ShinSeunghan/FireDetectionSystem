const Sequelize = require("sequelize");

class Area extends Sequelize.Model {
  static initiate(sequelize) {
    Area.init(
      {
        name: {
          type: Sequelize.STRING(50),
          primaryKey: true,
          allowNull: false,
          unique: true,
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
        modelName: "Area",
        tableName: "area",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {}
}

module.exports = Area;
