# Write your MySQL query statement below
SELECT COALESCE( 
    (
    SELECT salary FROM
        (
            SELECT salary, ROW_NUMBER() OVER(ORDER BY salary DESC) AS pos
            FROM (SELECT DISTINCT salary FROM employee) t
        ) t
    WHERE pos = 2
    ), null) AS SecondHighestSalary