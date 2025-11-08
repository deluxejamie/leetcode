# Write your MySQL query statement below
(SELECT name as results FROM (SELECT user_id, name, COUNT(rating) count FROM users NATURAL JOIN movierating GROUP BY user_id) t ORDER BY count DESC, name ASC LIMIT 1)
UNION ALL
(SELECT title as results FROM (SELECT movie_id, title, AVG(rating) rating FROM movies NATURAL JOIN movierating WHERE created_at >= '2020-02-01' AND created_at < '2020-03-01' GROUP BY movie_id) t ORDER BY rating DESC, title ASC LIMIT 1) 

