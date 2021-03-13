import { Sequelize, DataTypes, Optional, Model } from 'sequelize';

interface TripAttributes {
  id?: number;
  title: string;
}

interface TripCreationAttributes extends Optional<TripAttributes, 'id'> {}

interface TripInstance extends Model<TripAttributes, TripCreationAttributes>,
TripAttributes {}

module.exports = (sequelize:typeof Sequelize) => {
  sequelize.prototype.define<TripInstance>('trip', {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
}


    // Trip.belongsTo(
    //   model.user,
    //   { as: 'owner' },
    //   {
    //     foreignKey: {
    //       allowNull: false,
    //     },
    //   },
    // );
