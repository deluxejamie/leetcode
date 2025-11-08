# Write your MySQL query statement below
SELECT sell_date, COUNT(DISTINCT product) num_sold, GROUP_CONCAT(DISTINCT product) AS products
FROM activities
GROUP BY sell_date;
