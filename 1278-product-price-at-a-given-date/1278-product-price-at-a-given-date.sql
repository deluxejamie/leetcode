# Write your MySQL query statement below

SELECT product_id, COALESCE(new_price,10) price FROM
(SELECT DISTINCT product_id FROM products) t1 NATURAL LEFT OUTER JOIN (
 (
     SELECT DISTINCT product_id, MAX(change_date) AS change_date
     FROM (SELECT * FROM products WHERE change_date <= '2019-08-16') s
     GROUP BY product_id
 ) t2 NATURAL JOIN products
);
