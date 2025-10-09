SELECT month, (month + 2) / 3 AS res FROM quarterof;

SELECT
  month,
  CASE
    WHEN month < 4 THEN 1
    WHEN month < 7 THEN 2
    WHEN month < 10 THEN 3
    ELSE 4
  END AS res
FROM
  quarterof;

