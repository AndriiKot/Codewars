SELECT
   INITCAP(firstname || ' ' ||  lastname) AS shortlist
FROM
  Elves
WHERE 
  (firstname like '%tegil%' or lastname like '%astar%');
 