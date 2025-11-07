# Write your MySQL query statement below
SELECT contest_id, ROUND(COUNT(user_id) * 100/total.count, 2) percentage
FROM users NATURAL JOIN register, (SELECT COUNT(*) as count FROM users) total
GROUP BY contest_id
ORDER BY percentage DESC, contest_id ASC;