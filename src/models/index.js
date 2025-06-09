const Donor = require('./donor');
const Campaign = require('./campaign');
const Donation = require('./donation');
const sequelize = require('../config/database');

// Associations
Donor.hasMany(Donation, {
  foreignKey: 'donor_id',
  onDelete: 'CASCADE',
});

Donation.belongsTo(Donor, {
  foreignKey: 'donor_id',
});

Campaign.hasMany(Donation, {
  foreignKey: 'campaign_id',
  onDelete: 'CASCADE',
});

Donation.belongsTo(Campaign, {
  foreignKey: 'campaign_id',
});

module.exports = { sequelize, Donor, Campaign, Donation };
