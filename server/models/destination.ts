import { Sequelize, DataTypes, Optional, Model } from 'sequelize';
import { DestinationInstance } from './interfaces';

module.exports = (sequelize: typeof Sequelize) => {
  sequelize.prototype.define<DestinationInstance>('destination', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    emoji: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    timezone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    climate: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: false,
    },
  });
}
