// const { DataTypes } = require('sequelize');

module.exports = (sequelize:typeof Sequelize) => {
  sequelize.define('option', {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      destination: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      budgetRangeMin: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      budgetRangeMax: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      startDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      nights: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      votes: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      isChosen: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: false,
      },
    });

}


