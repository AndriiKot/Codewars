SELECT CEILING(yr/100.00) AS Century
FROM years;


-- My solution
SELECT
  CASE 
    WHEN yr % 100 = 0 THEN yr / 100 
    ELSE yr / 100 + 1 
  END AS century
FROM
  years;

