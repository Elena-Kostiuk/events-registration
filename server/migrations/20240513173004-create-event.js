'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      discription: {
        type: Sequelize.TEXTi,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      organizer: {
        type: Sequelize.STRING,
      },
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('events');
  },
};
