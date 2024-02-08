'use strict';
const bcryptjs=require("bcryptjs")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
 
  async up (queryInterface, Sequelize) {
    let hashedPassword=await bcryptjs.hash('adminUser',5)
    await queryInterface.bulkInsert('Users',[{
     userName:'anudeepthi',
     email:'anudeepthikolagani.999@gmail.com',
     password:hashedPassword,
     mobileNumber:6303484114,
     roleId:1,
     createdAt:new Date(),
     updatedAt:new Date()


    }])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users',null,{})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
