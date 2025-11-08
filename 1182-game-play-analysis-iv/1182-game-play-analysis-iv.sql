# Write your MySQL query statement below
SELECT ROUND((COUNT(DISTINCT a1.player_id))/(SELECT COUNT(DISTINCT player_id) FROM activity),2) AS fraction
FROM activity a1
WHERE EXISTS (SELECT * FROM activity a2 WHERE DATE_ADD(a1.event_date, INTERVAL 1 DAY) = a2.event_date and a1.player_id = a2.player_id) AND NOT EXISTS (SELECT * from activity a2 WHERE a2.event_date < a1.event_date AND a1.player_id = a2.player_id);