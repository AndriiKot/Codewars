SELECT
  film_id,
  title,
  special_features
FROM
  film
WHERE
    NOT (special_features && ARRAY['Commentaries']) 
  AND (
    (special_features && ARRAY['Behind the Scenes'] AND NOT (special_features && ARRAY['Deleted Scenes']))
    OR
    (special_features && ARRAY['Deleted Scenes'] AND NOT (special_features && ARRAY['Behind the Scenes']))
  )
ORDER BY
  title,
  film_id;
