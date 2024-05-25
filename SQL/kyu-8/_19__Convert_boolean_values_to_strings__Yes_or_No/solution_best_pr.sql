SELECT
  bool,
  CASE 
    WHEN bool THEN 'Yes'
    ELSE 'No'
  END AS res
FROM
  booltoword;

