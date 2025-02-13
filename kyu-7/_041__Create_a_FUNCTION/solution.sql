CREATE OR REPLACE FUNCTION INCREMENT(num BIGINT)
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