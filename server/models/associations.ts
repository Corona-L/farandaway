import { Sequelize } from 'sequelize';

function associations (sequelize: Sequelize) {
	const { trip, user, option, invitee } = sequelize.models;

  // User-Trip associations
  user.hasMany(trip);
  trip.belongsTo(user, {
    foreignKey: {
      allowNull: false,
    },
  });

  // Trip-Option associations
  trip.hasMany(option, { onDelete: 'cascade', hooks: true });
  option.belongsTo(trip, {
    foreignKey: {
      allowNull: false, //this will be tripId
    },
  });

  // Trip-invitee associations
  trip.hasMany(invitee);
  invitee.belongsTo(trip, {
    foreignKey: {
      allowNull: false,
    },
  });
}

export default associations;
