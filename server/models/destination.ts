import { Sequelize, DataTypes, Optional, Model } from 'sequelize';

interface DestinationAttributes {
  id?: number;
  name: string;
  country: string;
  emoji: string;
  timezone: string;
  climate: object[]; // need to define interface for climate json
}

interface DestinationCreationAttributes
  extends Optional<DestinationAttributes, 'id'> {}

interface DestinationInstance 
  extends Model<DestinationAttributes, DestinationCreationAttributes>,
    DestinationAttributes {}

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
