SELECT
  film_id,
  title,
  special_features
FROM
  film
WHERE
  special_features @> ARRAY['Trailers', 'Deleted Scenes'] AND 
  array_length(special_features, 1) = 2
ORDER BY
  title,
  film_id;