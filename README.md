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
fundraising_api/src/<br>
│<br>
├── app.js → API entry point<br>
├── .env → Environment variables<br>
├── config/database.js → Sequelize DB config<br>
├── models/ → Donor, Campaign, Donation models<br>
├── routes/donations.js → Donation-related routes<br>
├── seeds/seed.js → Seeder script with sample data<br>
└── package.json<br>

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
DB_PASSWORD=your_password
DB_HOST=your_host
DB_PORT=your_port

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

Basic Request (defaults to page 1, limit 10):
```bash
curl -X GET "http://localhost:3000/api/v1/donations"
```

With Pagination:
```bash
curl -X GET "http://localhost:3000/api/v1/donations?page=2&limit=5"
```

Filter by campaign_id:
```bash
curl -X GET "http://localhost:3000/api/v1/donations?campaign_id=3"
```

Filter by currency:
```bash
curl -X GET "http://localhost:3000/api/v1/donations?campaign_id=2&currency=ZAR&page=1&limit=20"
```

Combined filters:
```bash
curl -X GET "http://localhost:3000/api/v1/donations?campaign_id=2&currency=ZAR&page=1&limit=20"
```

GET /api/v1/donations/summary
Returns donation aggregates:

    * Total donation amount per campaign

    * Total donation amount per currency

    * Average donation amount (completed only)

```bash
curl -X GET "http://localhost:3000/api/v1/donations/summary"
```


📬 Contact<br>
Built by Lindelwe Myeza 
Reach out on [LinkedIn](https://www.linkedin.com/in/lindelwe-myeza/) or via [Email](mailto:lindelwenpmyeza@gmail.com) if you'd like to chat more about the project!

