CREATE OR REPLACE FUNCTION sum_letters(letters VARCHAR[])
RETURNS VARCHAR(1) AS $$
DECLARE
    total INTEGER := 0;
BEGIN
    IF letters IS NULL OR array_length(letters, 1) = 0 THEN
        RETURN 'z';
    END IF;

    FOR i IN 1..array_length(letters, 1) LOOP
        total := (total + (ASCII(letters[i]) - ASCII('a') + 1)) % 26;
    END LOOP;

    IF CHR(total + ASCII('a') - 1) = '`' THEN
        RETURN 'z';
    ELSE
        RETURN CHR(total + ASCII('a') - 1);
    END IF;
END;
$$ LANGUAGE plpgsql;

-- Example usage
SELECT sum_letters(array_agg(letter)) AS letter
FROM letters;