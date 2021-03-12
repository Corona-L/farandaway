const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('invitee', {
    emailAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
}
