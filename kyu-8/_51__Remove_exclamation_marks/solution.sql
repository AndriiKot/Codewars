SELECT 
    s,
    TRANSLATE(s, '!', '') AS res
FROM
    removeexclamationmarks;