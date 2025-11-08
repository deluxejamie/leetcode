# m: manager, s: subordinate
SELECT m.employee_id, m.name, COUNT(*) reports_count, ROUND(AVG(s.age),0) average_age
FROM employees m INNER JOIN employees s ON m.employee_id = s.reports_to
GROUP BY m.employee_id
ORDER BY m.employee_id ASC;