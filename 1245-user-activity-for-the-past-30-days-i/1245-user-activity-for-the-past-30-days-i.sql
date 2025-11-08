# Write your MySQL query statement below
SELECT activity_date day, COUNT(DISTINCT user_id) active_users
FROM activity
WHERE activity_date <= '2019-07-27' AND DATE_ADD(activity_date, INTERVAL 30 DAY) > '2019-07-27'
GROUP BY day;
