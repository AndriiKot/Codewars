SELECT  n,
        CASE
              WHEN n <= 0 THEN 0
              ELSE n * (n + 1) * (n + 2) / 6
        END AS res      

FROM sumtriangular;
    