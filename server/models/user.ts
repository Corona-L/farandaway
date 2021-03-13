import { Sequelize, DataTypes } from 'sequelize';
import { UserInstance } from './interfaces/index';



// We export a function that defines the model.
// This function will automatically receive as parameter the Sequelize connection object.
module.exports = (sequelize:Sequelize) => {
  sequelize.define<UserInstance>('user', {
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
