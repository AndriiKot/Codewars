SELECT
  id,
  BIT_LENGTH(name) as name,
  birthday,
  BIT_LENGTH(race) as race
FROM
  demographics;
  