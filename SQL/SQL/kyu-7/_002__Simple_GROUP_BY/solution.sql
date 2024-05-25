SELECT
  age,
  count(*) as people_count
FROM
    people
GROUP BY
  age;