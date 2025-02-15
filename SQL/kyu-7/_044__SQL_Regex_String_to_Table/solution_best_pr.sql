SELECT
  REGEXP_SPLIT_TO_TABLE(text, '[aeiou]') AS results
FROM random_string;