const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Campaign = sequelize.define('Campaign', {
  campaign_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  campaign_name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  created_date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'campaigns',
  timestamps: false,
  freezeTableName: true,
});

module.exports = Campaign;
