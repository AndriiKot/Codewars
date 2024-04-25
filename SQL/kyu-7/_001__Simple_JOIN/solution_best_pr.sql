SELECT products.*, companies.name AS company_name
FROM products JOIN companies ON company_id = companies.id;


SELECT p.*,
       c.name AS company_name
  FROM products p,
       companies c
 WHERE c.id = p.company_id;