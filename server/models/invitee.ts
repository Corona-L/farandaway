import { Sequelize, Model, Optional, DataTypes } from 'sequelize';

interface InviteeAttributes {
  id?: number;
  emailAddress: string;
  userId: number;
}

interface IniviteeCreationAttributes
  extends Optional<InviteeAttributes, 'id'> {}

interface InviteeInstance
  extends Model<InviteeAttributes, IniviteeCreationAttributes>,
    InviteeAttributes {}

module.exports = (sequelize: typeof Sequelize) => {
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
