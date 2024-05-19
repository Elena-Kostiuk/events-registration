'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Visitor extends Model {
    static associate (models) {
      Visitor.belongsToMany(models.Event, {
        through: 'visitors_to_events',
        foreignKey: 'visitor_id',
        otherKey: 'event_id',
        timestamps: false,
      });
    }
  }
  Visitor.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
          isEmail: true,
        },
      },
      birthday: { type: DataTypes.DATE },
      source: { type: DataTypes.STRING },
    },
    {
      sequelize,
      modelName: 'Visitor',
      tableName: 'visitors',
      timestamps: false,
    }
  );
  return Visitor;
};
