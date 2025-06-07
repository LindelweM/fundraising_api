CREATE TABLE donors (
    donor_id INT PRIMARY KEY,
    donor_name VARCHAR,
    created_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE campaigns (
    campaign_id INT PRIMARY KEY,
    campaign_name VARCHAR,
    created_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TYPE donation_status AS ENUM ('completed', 'pending', 'failed');

CREATE TABLE donations (
    donation_id SERIAL PRIMARY KEY,
    donor_id INT REFERENCES donors(donor_id),
    campaign_id INT REFERENCES campaigns(campaign_id),
    amount DECIMAL(10, 2) NOT NULL CHECK (amount > 0),
    currency VARCHAR(3) NOT NULL,
    donation_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    status donation_status NOT NULL
);
