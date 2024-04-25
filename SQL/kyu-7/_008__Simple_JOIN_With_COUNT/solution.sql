SELECT
  p.id,
  p.name,
  COUNT(t.id) AS toy_count
FROM people p 
    INNER JOIN toys t on(p.id = t.people_id)
GROUP BY
  p.name,
  p.id;
