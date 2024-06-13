SELECT race, COUNT(race)
FROM demographics
GROUP BY race
ORDER BY Count(race) desc;

-- my solution
SELECT
  race,
  COUNT(*)
FROM
  demographics
GROUP BY
  race
ORDER BY
  COUNT(*) DESC;