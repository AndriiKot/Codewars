SELECT 
  n,
  COALESCE((SELECT SUM(generate_series)::BIGINT FROM
    GENERATE_SERIES(1,n)),0) AS res
FROM
  triangular;