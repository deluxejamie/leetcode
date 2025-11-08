# Write your MySQL query statement below
SELECT DATE_FORMAT(trans_date, '%Y-%m') month, country, COUNT(*) trans_count, SUM(state='approved') approved_count, SUM(amount) trans_total_amount, SUM((state='approved') * amount) approved_total_amount
FROM transactions
GROUP BY month, country