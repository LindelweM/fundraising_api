const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Donor = sequelize.define('Donor', {
  donor_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  donor_name: {
    type: DataTypes.STRING(100), // Match VARCHAR(100) from table schema
    allowNull: false,
  }
}, {
  tableName: 'donors',
  timestamps: false, // Since you don't have created_at / updated_at
  freezeTableName: true, // Prevents pluralization
});

module.exports = Donor;
