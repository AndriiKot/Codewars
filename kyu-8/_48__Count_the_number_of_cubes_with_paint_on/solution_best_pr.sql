SELECT n, CASE 
            WHEN n = 0 THEN 1
            ELSE n * n * 6 + 2
          END AS res
FROM squares;

-- My solution
SELECT
  n,
  CASE 
    WHEN n = 0 THEN 1
    ELSE (n + 1) * (n + 1) * 6 - (n + 1) * 8 - 4 * (n + 1 - 2) 
   END AS res
FROM
  squares;
