SELECT 
  length(name) AS id,
  length(legs::text) AS name,
  length(arms::text) AS legs,
  length(characteristics) AS arms,
  length(id::text) AS characteristics
FROM
  monsters;