import { Sequelize, DataTypes, Optional, Model } from 'sequelize';

interface OptionAttributes {
  id?: number;
  title: string;
  destination: string;
  budgetRangeMin: string;
  budgetRangeMax: string;
  startDate: Date;
  nights: number;
  votes: number;
  isChosen: boolean;
}

interface OptionCreationAttributes extends Optional<OptionAttributes, 'id'> {}

interface OptionInstance extends Model<OptionAttributes, OptionCreationAttributes>,
OptionAttributes {}

module.exports = (sequelize:typeof Sequelize) => {
  sequelize.prototype.define<OptionInstance>('option', {
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


