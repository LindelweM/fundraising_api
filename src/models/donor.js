const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Donor = sequelize.define('Donor', {
  donor_id: { type: DataTypes.INTEGER, primaryKey: true },
  donor_name: { type: DataTypes.STRING }
}, {
  tableName: 'donors',
  timestamps: false,
});

module.exports = Donor;
