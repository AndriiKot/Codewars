SELECT
  film_id,
  title,
  special_features
FROM
  film
WHERE 
  special_features @> ARRAY['Trailers', 'Deleted Scenes']
ORDER BY
  title,
  film_id;