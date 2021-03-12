const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('trip', {
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
