'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Event.belongsToMany(models.Visitor, {
        through: 'visitors_to_events',
        foreignKey: 'eventId'
      })
    }
  }
  Event.init({
    title: {type:DataTypes.STRING,
      allowNull: false, 
    },
    discription: {type:DataTypes.TEXT,},
    date: {type:DataTypes.DATE,
      allowNull: false,
    },
    organizer: {type:DataTypes.STRING}
  }, {
    sequelize,
    modelName: 'Event',
    tableName: 'events',
    timestamps:false
  });
  return Event;
};