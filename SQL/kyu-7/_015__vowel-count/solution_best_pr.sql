SELECT
    str,
    LENGTH(REGEXP_REPLACE(str, '[^aeiou]', '', 'gi'))  AS res
FROM
    getcount;

  
-- Other solution
SELECT 
  str, 
  LENGTH(str) - LENGTH(TRANSLATE(str,'aeiou','')) AS res
FROM 
  getcount;