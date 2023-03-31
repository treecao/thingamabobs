const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      host: '127.0.0.1',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
      port: 3306,
    }
  );
}

// if (process.env.DATABASE_URL) {
//   // the application is executed on Heroku ... use the postgres database
//   sequelize = new Sequelize(process.env.DATABASE_URL, {
//     dialect:  'postgres',
//     protocol: 'postgres',
//     logging:  true //false
//   });
// } else {
//   // the application is executed on the local machine
//   sequelize = new Sequelize("postgres:///my_db");
// }

module.exports = sequelize;
