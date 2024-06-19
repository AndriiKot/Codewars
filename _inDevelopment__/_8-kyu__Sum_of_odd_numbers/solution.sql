CREATE OR REPLACE FUNCTION sum_odd_numbers(n BIGINT)
RETURNS SETOF BIGINT AS $$
DECLARE
    i BIGINT := 1;
    sum BIGINT := 0;
BEGIN
    LOOP
        EXIT WHEN i > n;
        
        IF i % 2 <> 0 THEN
            sum := sum + i;
            RETURN NEXT i;
        END IF;
        
        i := i + 1;
    END LOOP;

    RETURN sum;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION sum_odd_numbers(n BIGINT) 
RETURNS BIGINT AS $$
   DECLARE i BIGINT := 1; 
          sum BIGINT := 0; 
          odd BIGINT := 0;
BEGIN LOOP EXIT WHEN odd >= n;
 
    IF i % 2 <> 0 THEN
        sum := sum + i;
        odd := odd + 1;
    END IF;
    
    i := i + 1;
END LOOP;

RETURN sum;
END; $$ LANGUAGE plpgsql;
