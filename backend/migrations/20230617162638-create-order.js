'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },   
      userId: {
        type: Sequelize.INTEGER,
        references:{
          model:"users",
          key:"id"
        }
      },
      bookId: {
        type: Sequelize.INTEGER,
        references:{
          model:"Books",
          key:"id"

        }
      },quantity:{
        type:Sequelize.INTEGER
    },
      bookType:{
        type:Sequelize.STRING
      },
      paymentId:{
        type:Sequelize.INTEGER,
        references:{
          model:"payments",
          key:"id"
        }

      },
      
      
      deliveryAddress: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('orders');
  }
};