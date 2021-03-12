function associations (sequelize) {
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

module.exports = associations;



// Option.associate = (model) => {
//   Option.belongsTo(model.trip, {
//     foreignKey: {
//       allowNull: false, //this will be tripId
//     },
//   });
// };

// user.associate = (model) => {
//   User.hasMany(model.trip);
//   // User.hasOne(model.trip, { as: 'owner' }); //trip - this always needs to be the lowercase name
//   // User.hasMany(model.trip, { as: 'invited' });
// };

// Invitee.associate = (model) => {
//   Invitee.belongsTo(model.trip, {
//     foreignKey: {
//       allowNull: false,
//     },
//   });
// };

// Trip.associate = (model) => {
//   Trip.hasMany(model.option, { onDelete: 'cascade', hooks: true });
//   Trip.hasMany(model.invitee);
//   Trip.belongsTo(model.user, {
//     foreignKey: {
//       allowNull: false,
//     },
//   });