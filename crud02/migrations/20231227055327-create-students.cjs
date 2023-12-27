'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Students", {
      s_roll: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      s_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      s_image: {
        type: Sequelize.STRING,
      },
      s_mobile: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      s_email: {
        type: Sequelize.STRING,
      },
      s_faname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      s_famobile: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      s_qual: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      s_college: {
        type: Sequelize.STRING,
      },
      s_semster: {
        type: Sequelize.STRING,
      },
      s_passout: {
        type: Sequelize.STRING,
      },
      s_address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      s_city: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      s_pin: {
        type: Sequelize.DATE,
      },
      s_password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      s_act: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      s_role: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Students');
  }
};