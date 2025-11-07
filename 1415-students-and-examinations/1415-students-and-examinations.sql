# Write your MySQL query statement below
SELECT student_id, student_name, subject_name, COUNT(e.subject_name) attended_exams FROM
students CROSS JOIN subjects NATURAL LEFT JOIN examinations e
GROUP BY student_id, student_name, subject_name
ORDER BY student_id, subject_name;