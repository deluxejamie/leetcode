# Write your MySQL query statement below
SELECT m.person_name
FROM queue m INNER JOIN queue s ON s.turn <= m.turn
GROUP BY m.turn
HAVING SUM(s.weight) <= 1000
ORDER BY SUM(s.weight) DESC
LIMIT 1;