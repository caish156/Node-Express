"use strict";
const model = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Students extends Model {
    static associate(models) {
      // define association here
    }
  }
  Students.init(
    {
      s_roll: DataTypes.STRING,
      s_name: DataTypes.STRING,
      s_image: DataTypes.STRING,
      s_mobile: DataTypes.STRING,
      s_email: DataTypes.STRING,
      s_faname: DataTypes.STRING,
      s_famobile: DataTypes.STRING,
      s_qual: DataTypes.STRING,
      s_college: DataTypes.STRING,
      s_semster: DataTypes.STRING,
      s_passout: DataTypes.STRING,
      s_address: DataTypes.STRING,
      s_city: DataTypes.STRING,
      s_pin: DataTypes.STRING,
      s_date: DataTypes.DATE,
      s_password: DataTypes.STRING,
      s_act: DataTypes.BOOLEAN,
      s_role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Students",
    }
  );
  return Students;
};
