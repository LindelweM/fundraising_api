const express = require('express');
const router = express.Router();
const { Donation } = require('../models');
const { Op } = require('sequelize');

router.get('/', async (req, res) => {
  const { campaign_id, currency, page = 1, limit = 10 } = req.query;
  const offset = (page - 1) * limit;

  const where = { status: 'completed' };
  if (campaign_id) where.campaign_id = campaign_id;
  if (currency) where.currency = currency;

  const { rows, count } = await Donation.findAndCountAll({
    where,
    offset: +offset,
    limit: +limit,
    order: [['donation_date', 'DESC']]
  });

  res.json({ data: rows, total: count, page: +page, pages: Math.ceil(count / limit) });
});

router.get('/summary', async (req, res) => {
  const Sequelize = require('sequelize');
  const { Donation } = require('../models');

  const totalByCampaign = await Donation.findAll({
    where: { status: 'completed' },
    attributes: ['campaign_id', [Sequelize.fn('SUM', Sequelize.col('amount')), 'total']],
    group: ['campaign_id']
  });

  const totalByCurrency = await Donation.findAll({
    where: { status: 'completed' },
    attributes: ['currency', [Sequelize.fn('SUM', Sequelize.col('amount')), 'total']],
    group: ['currency']
  });

  const avgDonation = await Donation.findOne({
    where: { status: 'completed' },
    attributes: [[Sequelize.fn('AVG', Sequelize.col('amount')), 'average']]
  });

  res.json({
    total_by_campaign: totalByCampaign,
    total_by_currency: totalByCurrency,
    average_donation: parseFloat(avgDonation.dataValues.average || 0).toFixed(2)
  });
});

module.exports = router;
