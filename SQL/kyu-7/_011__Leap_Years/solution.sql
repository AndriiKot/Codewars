SELECT
  year,
  CASE 
    WHEN year % 400 = 0 THEN true
    WHEN year % 100 = 0 THEN false
    WHEN year % 4 = 0 THEN true 
    ELSE false
  END AS is_leap  
FROM years
ORDER BY year;      
