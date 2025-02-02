SELECT n, 
CASE
  WHEN MOD(n, 2) = 0 THEN n / 2
  ELSE (n - 1) / 2
  END AS res 
FROM oddcount;