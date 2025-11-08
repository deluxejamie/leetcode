# Write your MySQL query statement below
SELECT employee_id, department_id FROM employee
 WHERE primary_flag = 'Y' OR
 (employee_id,1) IN (SELECT employee_id, COUNT(DISTINCT department_id) FROM employee GROUP BY employee_id);