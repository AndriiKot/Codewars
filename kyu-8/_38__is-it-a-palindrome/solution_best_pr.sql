-- My solution
SELECT
  str,
  LOWER(str) = LOWER(REVERSE(str)) AS res
FROM
  ispalindrome;


-- solutin codewars
SELECT str, CASE WHEN str ILIKE REVERSE (str)
  THEN TRUE ELSE FALSE END AS res
FROM ispalindrome;
