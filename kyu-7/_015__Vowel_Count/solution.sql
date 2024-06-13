SELECT
    str,
    LENGTH(REGEXP_REPLACE(str, '[^aeiou]', '', 'gi'))  AS res
FROM
    getcount;