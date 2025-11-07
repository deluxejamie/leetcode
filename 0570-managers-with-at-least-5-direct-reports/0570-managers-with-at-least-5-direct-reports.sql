# Write your MySQL query statement below
SELECT m.name
FROM employee m INNER JOIN employee s ON s.managerid = m.id
GROUP BY m.id
HAVING COUNT(*) >= 5;

