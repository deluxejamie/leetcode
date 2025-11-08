# Write your MySQL query statement below
SELECT product_name, SUM(unit) unit
FROM products NATURAL JOIN orders
WHERE order_date < '2020-03-01' AND order_date >= '2020-02-01'
GROUP BY product_name
HAVING unit >= 100;