# 📊 Fundraising Api 

This is a Node.js + Express API. It connects to a PostgreSQL database, stores donation data, and exposes endpoints for reporting and analytics.

---

## 🔧 Tech Stack

- **Node.js** + **Express**
- **PostgreSQL**
- **Sequelize ORM**
- **dotenv** for environment config

---

## 📁 Project Structure
fundraising_api/src/
│
├── app.js → API entry point
├── .env → Environment variables
├── config/database.js → Sequelize DB config
├── models/ → Donor, Campaign, Donation models
├── routes/donations.js → Donation-related routes
├── seeds/seed.js → Seeder script with sample data
└── package.json

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone git@github.com:LindelweM/fundraising_api.git
cd fundraising_api
```

### 2. Install dependencies

npm install

### 3. Configure environment variables
Create a .env file:

DB_NAME=fundraiser_db
DB_USER=your_db_user
DB_PASSWORD=yourpassword
DB_HOST=localhost
DB_PORT=5432

### 4. Create the database
Create a PostgreSQL database with a name for the api:

```bash
psql -U postgres -c "CREATE DATABASE fundraiser_db;"
```

### 5. Seed the database

```bash
npm run seed
```

### 6. Start the API

```bash
npm start
```

API Endpoints
GET /api/v1/donations
Returns a paginated list of completed donations.

GET /api/v1/donations/summary
Returns donation aggregates:

    * Total donation amount per campaign

    * Total donation amount per currency

    * Average donation amount (completed only)

📬 Contact
Built by Lindelwe Myeza 
Reach out on [LinkedIn](https://www.linkedin.com/in/lindelwe-myeza/) or via [Email](mailto:lindelwenpmyeza@gmail.com) if you'd like to chat more about the project!

