# Write your MySQL query statement below
SELECT s.user_id, COALESCE(ROUND(SUM(action='confirmed') / (SUM(action='timeout') + SUM(action='confirmed')), 2), 0) AS confirmation_rate
FROM signups s LEFT OUTER JOIN confirmations c ON s.user_id = c.user_id
GROUP BY s.user_id;
