'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here  
      Book.hasMany(models.Cart,{foreignKey:{name:"bookId"}})
      Book.hasMany(models.order,{foreignKey:{name:"bookId"}})
    }
  }
  Book.init({
    bookName: DataTypes.STRING,
    author: DataTypes.STRING,
    desc: DataTypes.STRING,
    zenre: DataTypes.STRING,  
    newBookPrice: DataTypes.FLOAT,
    oldBookPrice: DataTypes.FLOAT,
    releasedDate: DataTypes.DATE,
    oldBookCopies: DataTypes.INTEGER,
    newBookCopies: DataTypes.INTEGER,
    discountOnNewBook:DataTypes.INTEGER,
    discountOnOldBook:DataTypes.INTEGER,
    mrp:DataTypes.FLOAT,
    image:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};