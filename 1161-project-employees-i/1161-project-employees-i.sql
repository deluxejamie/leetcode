# Write your MySQL query statement below
SELECT project_id, ROUND(AVG(experience_years),2) average_years
FROM project NATURAL JOIN employee
GROUP BY project_id;