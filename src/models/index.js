const sequelize = require('../config/database');
const Donor = require('./donor');
const Campaign = require('./campaign');
const Donation = require('./donation');

Donor.hasMany(Donation, { foreignKey: 'donor_id' });
Campaign.hasMany(Donation, { foreignKey: 'campaign_id' });
Donation.belongsTo(Donor, { foreignKey: 'donor_id' });
Donation.belongsTo(Campaign, { foreignKey: 'campaign_id' });

module.exports = { sequelize, Donor, Campaign, Donation };
