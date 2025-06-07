const express = require('express');
const router = express.Router();
const { Donation } = require('../models');
const { Op } = require('sequelize');

// GET /api/v1/donations
router.get('/', async (req, res) => {
  try {
    const { campaign_id, currency, page = 1, limit = 10 } = req.query;

    // Validate pagination inputs
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);

    if (isNaN(pageNum) || isNaN(limitNum) || pageNum < 1 || limitNum < 1) {
      return res.status(400).json({ error: 'Invalid pagination parameters' });
    }

    const where = { status: 'completed' };

    if (campaign_id && isNaN(parseInt(campaign_id))) {
      return res.status(400).json({ error: 'campaign_id must be a number' });
    }

    if (currency && typeof currency !== 'string') {
      return res.status(400).json({ error: 'currency must be a string' });
    }

    if (campaign_id) where.campaign_id = campaign_id;
    if (currency) where.currency = currency;

    const offset = (pageNum - 1) * limitNum;

    const { rows, count } = await Donation.findAndCountAll({
      where,
      offset,
      limit: limitNum,
      order: [['donation_date', 'DESC']]
    });

    if (count === 0) {
      return res.status(404).json({ message: 'No donations found matching your criteria.' });
    }

    return res.status(200).json({
      data: rows,
      total: count,
      page: pageNum,
      pages: Math.ceil(count / limitNum)
    });

  } catch (error) {
    console.error('Error fetching donations:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/v1/donations/summary
router.get('/summary', async (req, res) => {
  try {
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

    return res.status(200).json({
      total_by_campaign: totalByCampaign,
      total_by_currency: totalByCurrency,
      average_donation: parseFloat(avgDonation.dataValues.average || 0).toFixed(2)
    });

  } catch (error) {
    console.error('Error fetching donation summary:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
