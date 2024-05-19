'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'visitors_to_events',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        eventId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          field: 'event_id',
          references: {
            model: 'events',
            key: 'id',
          },
        },
        visitorId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          field: 'visitor_id',
          references: {
            model: 'visitors',
            key: 'id',
          },
        },
      },
      {
        timestamps: false,
      }
    );
    await queryInterface.addConstraint('visitors_to_events', {
      fields: ['event_id', 'visitor_id'],
      type: 'unique',
      name: 'unique_pair_constraint',
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('visitors_to_events');
  },
};
