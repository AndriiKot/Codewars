
-- # write your SQL statement here: 
-- you are given a table 'cubes' with column 'n' (bigint)
-- return a query with column 'n' and your 
-- result in a column named 'res' (bigint)
-- sort results by column 'n' ascending
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

