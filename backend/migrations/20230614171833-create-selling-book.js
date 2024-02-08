'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sellingBooks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bookName: {
        type: Sequelize.STRING
      },
      author: {
        type: Sequelize.STRING
      },
      desc: {
        type: Sequelize.STRING
      },
      zenre: {
        type: Sequelize.STRING
      },
      releasedDate: {
        type: Sequelize.DATE
      },
      sellingPrice:{
        type:Sequelize.FLOAT
      },

      image:{
        type:Sequelize.STRING

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('sellingBooks');
  }
};