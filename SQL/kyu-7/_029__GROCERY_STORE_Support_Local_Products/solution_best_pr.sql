SELECT count(id) as products, country
FROM products
WHERE country in ('United States of America', 'Canada')
GROUP BY country
ORDER BY products desc



-- MY SOLUTION

SELECT 
    country,
    count(country) AS products
FROM products
WHERE country IN ('United States of America', 'Canada')
GROUP BY country
ORDER BY count(country) DESC

