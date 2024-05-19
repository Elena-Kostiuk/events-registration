'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate (models) {
      Event.belongsToMany(models.Visitor, {
        through: 'visitors_to_events',
        foreignKey: 'event_id',
        otherKey: 'visitor_id',
        timestamps: false,
      });
    }
  }
  Event.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      discription: { type: DataTypes.TEXT },
      date: { type: DataTypes.DATE, allowNull: false },
      organizer: { type: DataTypes.STRING },
    },
    {
      sequelize,
      modelName: 'Event',
      tableName: 'events',
      timestamps: false,
    }
  );
  return Event;
};
