# Write your MySQL query statement below
DELETE FROM person WHERE
id NOT IN (
    SELECT id FROM (
        SELECT MIN(id) id, email
        FROM person
        GROUP BY email
    ) t
);