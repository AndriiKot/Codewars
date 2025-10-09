SELECT 
  n, 
  CASE 
    WHEN n <= 10 THEN  'Hardly any' 
    WHEN n <= 50 THEN  'More than a handful!' 
    WHEN n = 101 THEN  '101 DALMATIANS!!!' 
    ELSE  'Woah that''s a lot of dogs!'  
  END  as res
FROM dalmatians
ORDER BY 1 ASC;



