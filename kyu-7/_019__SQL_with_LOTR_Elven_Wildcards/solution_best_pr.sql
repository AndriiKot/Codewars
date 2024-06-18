-- My solution
SELECT
   INITCAP(firstname || ' ' ||  lastname) AS shortlist
FROM
  Elves
WHERE 
  (firstname like '%tegil%' or lastname like '%astar%');


-- Other solutions
SELECT 
  INITCAP(concat_ws(' ', firstname, lastname))  AS shortlist   
FROM Elves
WHERE 
  firstname LIKE '%tegil%' Or lastname LIKE '%astar%';
 