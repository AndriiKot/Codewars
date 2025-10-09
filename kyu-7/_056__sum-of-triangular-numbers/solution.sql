CREATE OR REPLACE FUNCTION sum_of_triangular_numbers(num BIGINT)
RETURNS BIGINT AS $$
DECLARE
    total_sum BIGINT := 0;
    i BIGINT := 1;
BEGIN
    WHILE num > 0 AND i <= num LOOP 
        total_sum := total_sum + i * (i + 1) / 2;
        i := i + 1;
    END LOOP;
    RETURN total_sum;
END;
$$ LANGUAGE plpgsql;

SELECT
  n,
  sum_of_triangular_numbers(n) AS res
FROM
  sumtriangular;
