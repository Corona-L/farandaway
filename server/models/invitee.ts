import { Sequelize, DataTypes, Optional, Model } from 'sequelize';

interface InviteeAttributes {
  id?: number;
  emailAddress: string;
  userId: number;
}

interface InviteeCreationAttributes extends Optional<InviteeAttributes, 'id'> {}

interface InviteeInstance extends Model<InviteeAttributes, InviteeCreationAttributes>,
InviteeAttributes {}

module.exports = (sequelize:typeof Sequelize) => {
  sequelize.prototype.define<InviteeInstance>('invitee', {
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
