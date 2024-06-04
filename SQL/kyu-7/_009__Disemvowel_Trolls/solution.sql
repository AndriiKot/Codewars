SELECT
  str,
  TRANSLATE(str, 'aeiouAEIOU', '') AS res
FROM
  disemvowel;