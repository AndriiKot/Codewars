SELECT
  s,
  SUBSTR(s, 2, CHAR_LENGTH(s) - 2) AS res
FROM
  removechar;