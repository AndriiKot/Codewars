SELECT
  number,
  CASE (n.number % 2 = 0)
    WHEN TRUE THEN 'Even'
    ELSE 'Odd'
  END AS is_even
FROM
  numbers n;