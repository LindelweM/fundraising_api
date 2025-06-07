const express = require('express');
const app = express();
const { sequelize } = require('./models');
const donationRoutes = require('./routes/donations');

app.use(express.json());
app.use('/api/v1/donations', donationRoutes);

sequelize.sync().then(() => {
  console.log('DB synced');
  app.listen(3000, () => console.log('Server running on http://localhost:3000'));
});
