require('dotenv').config();
const config = process.env;
import { Sequelize } from 'sequelize';
import associations from './associations';


if (typeof config.DATABASE_URL !== 'string') throw new Error('database url missing');
const sequelize = new Sequelize(config.DATABASE_URL);


  // config.DB_NAME,
  // config.DB_USERNAME,
  // config.DB_PASSWORD,
  // {
  //   host: config.DB_HOST,
  //   dialect: config.DB_DIALECT,
  // },

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

export default sequelize;
