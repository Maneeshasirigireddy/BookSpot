'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Books', {
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
      newBookPrice: {
        type: Sequelize.FLOAT
      },
      oldBookPrice: {
        type: Sequelize.FLOAT
      },
      discountOnNewBook:
      {type:Sequelize.INTEGER,},
      discountOnOldBook:
      {type:Sequelize.INTEGER,},

      mrp:{
        type:Sequelize.FLOAT},
      releasedDate: {
        type: Sequelize.DATE
      },
      oldBookCopies: {
        type: Sequelize.INTEGER
      },
      newBookCopies: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Books');
  }
};