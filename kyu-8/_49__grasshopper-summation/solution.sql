CREATE OR REPLACE FUNCTION calculate_sum(num INTEGER)
RETURNS INTEGER AS $$
DECLARE
    total_sum INTEGER := 0;
    i INTEGER := 1;
BEGIN
    WHILE i <= num LOOP
        total_sum := total_sum + i;
        i := i + 1;
    END LOOP;

    RETURN total_sum;
END;
$$ LANGUAGE plpgsql;

SELECT
  n,
  calculate_sum(n) AS res
FROM
  kata;