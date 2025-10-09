SELECT
  id,
  name,
  stock
FROM
  products
WHERE
  stock < 3  AND producent = 'CompanyA'
GROUP BY
  id
ORDER BY
  id;
