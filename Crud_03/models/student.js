'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Student.init(
    {
      roll: DataTypes.STRING,
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      mobile: DataTypes.STRING,
      email: DataTypes.STRING,
      fa_name: DataTypes.STRING,
      fa_mobile: DataTypes.STRING,
      qualification: DataTypes.STRING,
      college: DataTypes.STRING,
      semster: DataTypes.STRING,
      passout: DataTypes.STRING,
      address: DataTypes.STRING,
      city: DataTypes.STRING,
      pincode: DataTypes.STRING,
      password: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Student",
    }
  );
  return Student;
};