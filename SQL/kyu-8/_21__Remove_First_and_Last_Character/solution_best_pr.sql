SELECT s, SUBSTRING(s, 2, LENGTH(s) - 2) AS res 
FROM removechar;

SELECT
  s,
  SUBSTR(s, 2, CHAR_LENGTH(s) - 2) AS res
FROM
  removechar;

