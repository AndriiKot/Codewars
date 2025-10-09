SELECT
  str,
  LOWER(str) = LOWER(REVERSE(str)) AS res
FROM
  ispalindrome;

