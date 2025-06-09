const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Donation = sequelize.define('Donation', {
  donation_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  donor_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  campaign_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: { min: 0.01 },
  },
  currency: {
    type: DataTypes.STRING(3),
    allowNull: false,
  },
  donation_date: {
    type: DataTypes.DATE, // Use DATE instead of DATEONLY for better MSSQL compatibility
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('completed', 'pending', 'failed'),
    allowNull: false,
  }
}, {
  tableName: 'donations',
  timestamps: false,
  freezeTableName: true,
});

module.exports = Donation;
