# Write your MySQL query statement below

SELECT category, COALESCE(accounts_count,0) accounts_count FROM (
    SELECT 'Low Salary' category
    UNION
    SELECT 'Average Salary' category
    UNION
    SELECT 'High Salary' category
) t1 NATURAL LEFT OUTER JOIN (
    SELECT (CASE
        WHEN income < 20000 THEN 'Low Salary'
        WHEN income <= 50000 THEN 'Average Salary'
        ELSE 'High Salary' END
    ) category, COUNT(*) accounts_count
    FROM accounts
    GROUP BY category
) t2;