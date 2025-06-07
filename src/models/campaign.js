const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Campaign = sequelize.define('Campaign', {
  campaign_id: { type: DataTypes.INTEGER, primaryKey: true },
  campaign_name: { type: DataTypes.STRING }
}, {
  tableName: 'campaigns',
  timestamps: false,
});

module.exports = Campaign;
