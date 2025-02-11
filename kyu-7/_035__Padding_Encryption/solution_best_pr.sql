SELECT
  id,
  name,
  perceived_skill_level - actual_skill_level AS skill_overestimation,
  CASE
    WHEN perceived_skill_level - actual_skill_level < 3
    THEN 'Mild case of overconfidence'
    WHEN perceived_skill_level - actual_skill_level < 6
    THEN 'Moderate case of overconfidence'
    WHEN perceived_skill_level - actual_skill_level < 8
    THEN 'Serious case of overconfidence'
    ELSE 'Extreme case of Dunning-Kruger effect detected!'
  END AS overconfidence_category
FROM
  users
WHERE
  perceived_skill_level - actual_skill_level > 0
ORDER BY
  perceived_skill_level - actual_skill_level DESC, id DESC;