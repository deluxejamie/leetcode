# Write your MySQL query statement below
SELECT name, bonus FROM employee NATURAL LEFT OUTER JOIN bonus WHERE bonus IS NULL OR bonus < 1000;