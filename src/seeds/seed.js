const { sequelize, Donor, Campaign, Donation } = require('../models');

async function seed() {
  await sequelize.sync({ force: true });

  await Donor.bulkCreate([
    { donor_id: 101, donor_name: 'Hope Foundation' },
    { donor_id: 102, donor_name: 'James & Emily Carter' },
    { donor_id: 103, donor_name: 'Ubuntu Giving Circle' },
    { donor_id: 104, donor_name: 'Nelisiwe Mthembu Trust' },
    { donor_id: 105, donor_name: 'Beacon of Light Initiative' }
  ]);

  await Campaign.bulkCreate([
    { campaign_id: 1, campaign_name: 'Feed the Future' },
    { campaign_id: 2, campaign_name: 'Clean Water for All' },
    { campaign_id: 3, campaign_name: 'Books Beyond Borders' }
  ]);

  await Donation.bulkCreate([
    { donor_id: 101, amount: 50, currency: 'USD', donation_date: '2024-01-15', campaign_id: 1, status: 'completed' },
    { donor_id: 102, amount: 100, currency: 'ZAR', donation_date: '2024-01-16', campaign_id: 2, status: 'completed' },
    { donor_id: 101, amount: 25, currency: 'USD', donation_date: '2024-02-01', campaign_id: 1, status: 'completed' },
    { donor_id: 103, amount: 75, currency: 'EUR', donation_date: '2024-02-05', campaign_id: 3, status: 'pending' },
    { donor_id: 102, amount: 200, currency: 'ZAR', donation_date: '2024-03-10', campaign_id: 2, status: 'completed' },
    { donor_id: 104, amount: 150, currency: 'USD', donation_date: '2024-03-12', campaign_id: 1, status: 'completed' },
    { donor_id: 105, amount: 30, currency: 'EUR', donation_date: '2024-04-01', campaign_id: 3, status: 'completed' },
    { donor_id: 101, amount: 60, currency: 'USD', donation_date: '2024-04-05', campaign_id: 1, status: 'completed' }
  ]);

  console.log("Seeded successfully!");
  process.exit();
}

seed();
