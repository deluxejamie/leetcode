# Write your MySQL query statement below
SELECT s.machine_id, ROUND(AVG(e.timestamp - s.timestamp), 3) processing_time
FROM activity s
INNER JOIN activity e
ON s.machine_id = e.machine_id AND s.process_id = e.process_id AND e.activity_type='end'
WHERE s.activity_type='start'
GROUP BY s.machine_id;