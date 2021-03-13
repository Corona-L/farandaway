import { Sequelize, DataTypes } from 'sequelize';
import { OptionInstance } from './interfaces/index';

module.exports = (sequelize:Sequelize) => {
  sequelize.define<OptionInstance>('option', {
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
        defaultValue: false,
      },
    });

}


