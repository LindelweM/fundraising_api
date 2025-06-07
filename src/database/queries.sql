-- Total donation amount per campaign
SELECT cmp.campaign_id, cmp.campaign_name, SUM(amount) AS total_amount
FROM donations
INNER JOIN campaigns AS cmp ON cmp.campaign_id = donations.campaign_id
WHERE status = 'completed'
GROUP BY cmp.campaign_id;

-- Total donation amount per currency
SELECT currency, SUM(amount) AS total_amount
FROM donations
WHERE status = 'completed'
GROUP BY currency;

-- Number of unique donors per campaign
SELECT cmp.campaign_id, cmp.campaign_name, COUNT(DISTINCT donor_id) AS unique_donors
FROM donations
INNER JOIN campaigns AS cmp ON cmp.campaign_id = donations.campaign_id
GROUP BY cmp.campaign_id;

-- Average donation amount (completed only)
SELECT AVG(amount) AS average_donation
FROM donations
WHERE status = 'completed';

-- Monthly totals per currency for a given year
SELECT 
    DATE_TRUNC('month', donation_date) AS month,
    currency,
    SUM(amount) AS total
FROM donations
WHERE status = 'completed' AND EXTRACT(YEAR FROM donation_date) = 2024
GROUP BY month, currency
ORDER BY month, currency;
