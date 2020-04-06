'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('adsenses', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      learn: {
        type: Sequelize.STRING,
       },
      teach: {
        type: Sequelize.STRING,
       },
      value: {
        type: Sequelize.STRING,
       },
       created_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true
      }
    },{
      underscored:true,
      paranoid:true
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('adsenses');

  }
};
