# Write your MySQL query statement below
SELECT * FROM 
(
        SELECT visited_on, SUM(amount) OVER (ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) amount, ROUND(AVG(amount) OVER (ROWS BETWEEN 6 PRECEDING AND CURRENT ROW),2) average_amount
    FROM (
        SELECT visited_on, SUM(amount) amount
        FROM customer
        GROUP BY visited_on
    ) t
) innr
WHERE visited_on >= DATE_ADD((SELECT MIN(t2.visited_on) FROM customer t2), INTERVAL 6 DAY)
ORDER BY visited_on ASC;
