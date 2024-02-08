'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sellingBook extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  sellingBook.init({
    bookName: DataTypes.STRING,
    author: DataTypes.STRING,
    desc: DataTypes.STRING,
    zenre: DataTypes.STRING,
    releasedDate: DataTypes.DATE,
    sellingPrice:DataTypes.FLOAT,
    image:DataTypes.STRING

  }, {
    sequelize,
    modelName: 'sellingBook',
  });
  return sellingBook;
};