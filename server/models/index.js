import { Sequelize } from 'sequelize';
require('dotenv').config();
const config = process.env;
const associations = require('./associations.js');

const sequelize = new Sequelize(
  config.DB_NAME,
  config.DB_USERNAME,
  config.DB_PASSWORD,
  {
    host: config.DB_HOST,
    dialect: config.DB_DIALECT,
    port: config.DB_PORT,
  },
);

const modelDefiners = [
	require('./user'),
	require('./trip'),
	require('./option'),
	require('./invitee'),
	require('./flight'),
	require('./destination'),
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

// We execute all associations after the models are defined
associations(sequelize);

module.exports = sequelize;
