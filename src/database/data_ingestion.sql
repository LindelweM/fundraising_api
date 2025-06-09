-- Insert donors
INSERT INTO donors (donor_id, donor_name) VALUES
(101, 'Hope Foundation'),
(102, 'James & Emily Carter'),
(103, 'Ubuntu Giving Circle'),
(104, 'Nelisiwe Mthembu Trust'),
(105, 'Beacon of Light Initiative');

-- Insert campaigns
INSERT INTO campaigns (campaign_id, campaign_name) VALUES
(1, 'Feed the Future'),
(2, 'Clean Water for All'),
(3, 'Books Beyond Borders');

-- Insert donations (excluding donation_id since it's auto-incremented)
INSERT INTO donations (donor_id, amount, currency, donation_date, campaign_id, status) VALUES
(101, 50.00, 'USD', '2024-01-15', 1, 'completed'),
(102, 100.00, 'ZAR', '2024-01-16', 2, 'completed'),
(101, 25.00, 'USD', '2024-02-01', 1, 'completed'),
(103, 75.00, 'EUR', '2024-02-05', 3, 'pending'),
(102, 200.00, 'ZAR', '2024-03-10', 2, 'completed'),
(104, 150.00, 'USD', '2024-03-12', 1, 'completed'),
(105, 30.00, 'EUR', '2024-04-01', 3, 'completed'),
(101, 60.00, 'USD', '2024-04-05', 1, 'completed');
