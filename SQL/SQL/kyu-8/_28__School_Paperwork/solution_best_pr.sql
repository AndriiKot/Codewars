SELECT
  n,
  m,
  CASE 
    WHEN n > 0 AND m > 0 THEN n * m
    ELSE 0
  END AS res
FROM
  paperwork;

