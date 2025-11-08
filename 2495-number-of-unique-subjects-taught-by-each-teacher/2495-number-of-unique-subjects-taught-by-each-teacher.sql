# Write your MySQL query statement below
SELECT teacher_id, COUNT(DISTINCT(subject_id)) cnt
FROM teacher
GROUP BY teacher_id;