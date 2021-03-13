import { Sequelize, DataTypes, Optional, Model } from 'sequelize';

interface FlightAttributes {
  id?: number;
  origin: string;
  destination: string;
  outbound: Date;
  inbound: Date;
  minPrice: number;
  carrier: string;
  currency: string;
}

interface FlightCreationAttributes 
  extends Optional<FlightAttributes, 'id'> {}

interface FlightInstance 
  extends Model<FlightAttributes, FlightCreationAttributes>,
    FlightAttributes {}

module.exports = (sequelize: typeof Sequelize) => {
  sequelize.prototype.define('flight', {
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
