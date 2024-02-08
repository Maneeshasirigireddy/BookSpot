'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Role,{foreignKey:{name:"roleId"}})
      User.hasMany(models.Cart,{foreignKey:{name:"userId"}})
      User.hasMany(models.order,{foreignKey:{name:"userId"}})
    }
  }
  User.init({
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    mobileNumber: DataTypes.BIGINT
  }, {  
    sequelize,
    modelName: 'User',
  });
  return User;
};