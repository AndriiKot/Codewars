REATE OR REPLACE FUNCTION get_bytes(num DOUBLE PRECISION) 
RETURNS INTEGER AS $$
BEGIN
    RETURN LENGTH(CAST(num AS TEXT));
END;
$$ LANGUAGE plpgsql;

SELECT 
    get_bytes(number1) AS octnum1,
    get_bytes(number2) AS octnum2,
    get_bytes(number3) AS octnum3,
    get_bytes(number4) AS octnum4,
    get_bytes(number5) AS octnum5
FROM numbers;
