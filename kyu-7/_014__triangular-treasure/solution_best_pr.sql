SELECT n, CASE
            WHEN n < 0 THEN 0
            ELSE n * (n + 1) / 2
          END 
      AS res
FROM triangular;

-- My solution
SELECT 
  n,
  COALESCE((SELECT SUM(generate_series)::BIGINT FROM
    GENERATE_SERIES(1,n)),0) AS res
FROM
  triangular;