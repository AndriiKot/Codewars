SELECT
  age,
  COUNT(*) people_count
FROM
  people
GROUP BY
  age;


SELECT age, COUNT(name) AS people_count
FROM people
GROUP BY age;