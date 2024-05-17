SELECT number, 
CASE WHEN (number % 2) = 0 THEN 'Even'
ELSE 'Odd' END AS is_even
FROM numbers;

SELECT
  number, 
  CASE
    WHEN MOD(number, 2) = 0 THEN 'Even' 
    ELSE 
  END AS is_even 
FROM
  numbers;