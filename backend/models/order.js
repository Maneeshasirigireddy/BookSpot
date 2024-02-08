'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      order.belongsTo(models.Book,{foreignKey:{name:"bookId"}})
      order.belongsTo(models.payment,{foreignKey:{name:"paymentId"}})
    }
  }
  order.init({
    userId: DataTypes.INTEGER,
    bookId:DataTypes.INTEGER,
    bookType:DataTypes.STRING,
    quantity:DataTypes.INTEGER,
    deliveryAddress:{
      type:DataTypes.STRING,
      defaultValue:null}
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};