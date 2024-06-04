SELECT
  distance_to_pump,
  mpg,
  fuel_left,
  (distance_to_pump - (mpg * fuel_left)) <= 0 AS res
FROM
  zerofuel;
