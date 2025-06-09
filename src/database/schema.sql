CREATE TABLE donors (
    donor_id INT PRIMARY KEY, 
    donor_name VARCHAR(100),
    created_date DATETIME NOT NULL DEFAULT GETDATE()
);

CREATE TABLE campaigns (
    campaign_id INT PRIMARY KEY,
    campaign_name VARCHAR(100),
    created_date DATETIME NOT NULL DEFAULT GETDATE()
);

-- Replace ENUM with a CHECK constraint on status
CREATE TABLE donations (
    donation_id INT IDENTITY(1,1) PRIMARY KEY,
    donor_id INT FOREIGN KEY REFERENCES donors(donor_id) ON DELETE CASCADE,
    campaign_id INT FOREIGN KEY REFERENCES campaigns(campaign_id) ON DELETE CASCADE,
    amount DECIMAL(10, 2) NOT NULL CHECK (amount > 0),
    currency VARCHAR(3) NOT NULL,
    donation_date DATETIME NOT NULL DEFAULT GETDATE(),
    status VARCHAR(20) NOT NULL CHECK (status IN ('completed', 'pending', 'failed'))
);

--Primary keys : ID typically numeric and auto-incremented, INT is efficient for indexing.
--Timestamp : Captures the time of the transaction, helpful for auditing and analytics.