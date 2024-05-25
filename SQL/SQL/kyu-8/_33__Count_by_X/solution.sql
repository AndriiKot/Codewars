SELECT
  x,
  n,
  ARRAY(SELECT GENERATE_SERIES(x, n * x, x)) AS res
FROM
  counter
ORDER BY x, n;

