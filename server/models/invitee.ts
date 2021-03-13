import { Sequelize, Model, Optional, DataTypes } from 'sequelize';
import { InviteeInstance } from './interfaces/index';

module.exports = (sequelize:Sequelize) => {
  sequelize.define<InviteeInstance>('invitee', {
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
