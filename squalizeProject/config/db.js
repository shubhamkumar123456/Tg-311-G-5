const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sequalizerFirst', 'root', 'Shubham@123', {
  host: 'localhost',
  dialect:'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
  logging: false
});

module.exports = sequelize;