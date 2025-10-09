SELECT
  id,
  name,
  REGEXP_REPLACE(characteristics, '^(.*?)(,.*)?$', '\1') AS characteristic
FROM
  monsters
ORDER BY id;
