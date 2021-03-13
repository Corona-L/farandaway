import { Sequelize, DataTypes } from 'sequelize';
import { TripInstance } from './interfaces/index';


module.exports = (sequelize:Sequelize) => {
  sequelize.define<TripInstance>('trip', {
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
