SELECT
  id,
  CASE
    WHEN up_speed >= desired_height THEN 1
    ELSE CEIL((desired_height - down_speed)::FLOAT / (up_speed - down_speed))::INT
  END AS num_days
FROM
  growing_plant;
