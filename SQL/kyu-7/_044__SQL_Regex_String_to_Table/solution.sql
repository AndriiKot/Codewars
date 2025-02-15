SELECT
  REGEXP_REPLACE(text, '^[a, e, i, o, u]', '', 'gi') AS results
FROM
  random_string;
