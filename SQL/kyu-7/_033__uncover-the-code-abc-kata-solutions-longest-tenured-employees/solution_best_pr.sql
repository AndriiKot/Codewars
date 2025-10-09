select 
  SUM(ASCII(SUBSTR(name, POSITION(' ' IN name) + 1, 1))) AS hidden_code
from 
  employees
WHERE
  name IN (SELECT 
              name 
          FROM employees 
          WHERE 
            left_date IS NULL
          ORDER BY 
            joined_date
          LIMIT 5) 

