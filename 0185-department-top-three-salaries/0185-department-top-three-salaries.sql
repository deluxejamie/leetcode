# Write your MySQL query statement below
SELECT department, employee, salary
FROM (
    SELECT emp.name employee, dept.name department, salary, DENSE_RANK() OVER (partition BY departmentId ORDER BY salary DESC) r
    FROM employee emp INNER JOIN department dept ON emp.departmentId = dept.id
) t
WHERE r <=3;

