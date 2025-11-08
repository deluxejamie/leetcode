# Write your MySQL query statement below
SELECT ROUND(100 * SUM(customer_pref_delivery_date = order_date) / COUNT(*), 2) immediate_percentage
FROM delivery d
WHERE NOT EXISTS (SELECT * FROM delivery d2 WHERE d2.order_date < d.order_date AND d2.delivery_id <> d.delivery_id AND d.customer_id = d2.customer_id);