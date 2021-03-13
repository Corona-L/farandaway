const { DataTypes, Sequelize } = require('sequelize');

interface UserAttributes {
  id: number;
  firstName: string;
  lastName: string;
  password: string;
}


// We export a function that defines the model.
// This function will automatically receive as parameter the Sequelize connection object.
module.exports = (sequelize:typeof Sequelize) => {
  sequelize.define('user', {
    emailAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
}
