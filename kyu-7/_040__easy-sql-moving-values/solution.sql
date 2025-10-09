SELECT
  CHAR_LENGTH(name) as id,
  CHAR_LENGTH(legs::TEXT) as name,
  CHAR_LENGTH(arms::TEXT) as legs,
  CHAR_LENGTH(characteristics) as arms,
  CHAR_LENGTH(id::TEXT) as characteristics
FROM
  monsters;