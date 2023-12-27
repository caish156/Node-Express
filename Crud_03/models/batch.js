'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Batch extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Batch.init({
    name: DataTypes.STRING,
    course: DataTypes.STRING,
    timing: DataTypes.TIME,
    strength: DataTypes.INTEGER,
    fauclty: DataTypes.STRING,
    endate: DataTypes.DATEONLY,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Batch',
  });
  return Batch;
};