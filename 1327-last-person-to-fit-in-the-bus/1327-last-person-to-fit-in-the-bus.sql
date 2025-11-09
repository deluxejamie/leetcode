# Write your MySQL query statement below
SELECT person_name
FROM queue
WHERE turn = (
    SELECT MAX(turn) FROM (
        SELECT turn FROM 
        (SELECT * FROM queue ORDER BY turn ASC) q
        WHERE (
            SELECT SUM(weight) weight FROM queue t2 WHERE t2.turn <= q.turn 
        ) <= 1000
    ) t3
);
