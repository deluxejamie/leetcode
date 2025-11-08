# Write your MySQL query statement below
SELECT customer_id
FROM (SELECT customer_id, COUNT(DISTINCT product_key) count FROM customer GROUP BY customer_id) t
WHERE count = (SELECT COUNT(*) FROM product);