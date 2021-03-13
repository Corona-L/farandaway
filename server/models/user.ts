import { Sequelize, DataTypes, Optional, Model } from 'sequelize';

interface UserAttributes {
  id?: number;
  emailAddress: string;
  firstName: string;
  lastName: string;
  password: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

interface UserInstance extends Model<UserAttributes, UserCreationAttributes>,
UserAttributes {}


// We export a function that defines the model.
// This function will automatically receive as parameter the Sequelize connection object.
module.exports = (sequelize:typeof Sequelize) => {
  sequelize.prototype.define<UserInstance>('user', {
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
