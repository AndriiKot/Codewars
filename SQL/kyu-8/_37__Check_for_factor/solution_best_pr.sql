select id, base % factor = 0 as res from kata;


-- My solution
SELECT 
  id,
  CASE
    WHEN base % factor = 0 THEN TRUE
    ELSE FALSE
  END AS res
FROM kata;
