'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fees extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Fees.init({
    slipno: DataTypes.STRING,
    roll: DataTypes.STRING,
    course: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    remain: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Fees',
  });
  return Fees;
};