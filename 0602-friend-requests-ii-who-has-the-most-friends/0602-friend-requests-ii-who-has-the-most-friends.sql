# Write your MySQL query statement below

WITH ids as ((SELECT requester_id id FROM requestaccepted) UNION (SELECT accepter_id id FROM requestaccepted))
SELECT id, (COALESCE(requester_count,0) + COALESCE(accepter_count,0)) num
FROM ids NATURAL LEFT OUTER JOIN (SELECT requester_id id, COUNT(accepter_id) requester_count FROM requestaccepted GROUP BY id) t3 NATURAL LEFT OUTER JOIN (SELECT accepter_id id, COUNT(requester_id) accepter_count FROM requestaccepted GROUP BY id) t4
ORDER BY num DESC
LIMIT 1;