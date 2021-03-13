import { Sequelize, DataTypes, Optional, Model } from 'sequelize';
import { FlightInstance } from './interfaces';

module.exports = (sequelize: typeof Sequelize) => {
  sequelize.prototype.define<FlightInstance>('flight', {
    origin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    destination: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    outbound: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    inbound: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    minPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    carrier: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
}
