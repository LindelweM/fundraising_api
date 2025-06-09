const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  dialect: 'mssql',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 1433,
  dialectOptions: {
    options: {
      encrypt: false, // Use true if required by your SQL Server setup
      trustServerCertificate: true,
    }
  },
  logging: false,
});

module.exports = sequelize;
