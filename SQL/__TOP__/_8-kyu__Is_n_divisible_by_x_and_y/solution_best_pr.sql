SELECT id, n % x = 0 AND n % y = 0 AS res FROM kata;

-- My solution
SELECT
  id,
  CASE
    WHEN n % x = 0 AND n % y = 0 THEN TRUE
    ELSE FALSE
  END AS res
FROM kata;

