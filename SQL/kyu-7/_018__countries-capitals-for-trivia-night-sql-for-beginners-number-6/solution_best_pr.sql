SELECT
  CASE 
    WHEN continent IN ('Africa', 'Afrika') AND country LIKE 'E%'
    THEN capital
  END AS capital
FROM
  countries
ORDER BY
  capital 
LIMIT 3;

