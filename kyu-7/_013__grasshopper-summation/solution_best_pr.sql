select n, cast(sum(n3) as bigint) as res 
from (
  select n,power((generate_series(1,n)),3) as n3 from cubes) as foo
group by n
order by n;

-- My solution
CREATE OR REPLACE FUNCTION calculate_sum_cubes(num BIGINT)
RETURNS BIGINT AS $$
DECLARE
    total_sum BIGINT := 0;
    i BIGINT := 1;
BEGIN
    WHILE i <= num LOOP
        total_sum := total_sum + i * i * i;
        i := i + 1;
    END LOOP;

    RETURN total_sum;
END;
$$ LANGUAGE plpgsql;

SELECT
  n,
   calculate_sum_cubes(n) AS res
FROM
  cubes
ORDER BY
  n ASC;
