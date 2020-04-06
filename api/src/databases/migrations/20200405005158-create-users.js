'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false
      },
      green_coins: {
        type: Sequelize.STRING,
        allowNull: false
      },
      orange_coins: {
        type: Sequelize.STRING,
        allowNull: false
      },
      birth_date: {
        type: Sequelize.STRING,
        allowNull: false
      },
      work: {
        type: Sequelize.STRING,
        allowNull: true
      },
      id_device: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: true
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true
      }
    },
    {
      tableName: 'users',
      underscored: true,
      timestamps: true
    });
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('users')
  }
}
