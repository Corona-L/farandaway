const { Sequelize, DataTypes, Optional, Model } = require('sequelize');

interface DestinationAttributes {
  id: number;
  name: string;
  country: string;
  emoji: string;
  timezone: string;
  climate: object[];
}

interface DestinationCreationAttributes
  extends Optional<DestinationAttributes, 'id'> {}

interface DestinationInstance 
  extends Model<DestinationAttributes, DestinationCreationAttributes>,
    DestinationAttributes {}

module.exports = (sequelize: typeof Sequelize) => {
  sequelize.define<DestinationInstance>('destination', {
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
