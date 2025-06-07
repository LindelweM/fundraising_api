const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Donation = sequelize.define('Donation', {
  donation_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  donor_id: DataTypes.INTEGER,
  campaign_id: DataTypes.INTEGER,
  amount: { type: DataTypes.DECIMAL(10, 2), allowNull: false, validate: { min: 0.01 } },
  currency: { type: DataTypes.STRING(3), allowNull: false },
  donation_date: { type: DataTypes.DATEONLY, allowNull: false },
  status: { 
    type: DataTypes.ENUM('completed', 'pending', 'failed'),
    allowNull: false
  }
}, {
  tableName: 'donations',
  timestamps: false,
});

module.exports = Donation;
