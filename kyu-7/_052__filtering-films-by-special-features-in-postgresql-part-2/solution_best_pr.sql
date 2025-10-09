SELECT film_id, title, special_features
FROM film
WHERE special_features @> ARRAY['Trailers', 'Deleted Scenes']
AND CARDINALITY(special_features) = 2
ORDER BY title, film_id;

SELECT film_id, title, special_features
FROM film
WHERE special_features = '{"Trailers", "Deleted Scenes"}'
OR special_features = '{"Deleted Scenes", "Trailers"}'
ORDER BY title, film_id ASC;

SELECT film_id, title, special_features
FROM film
WHERE special_features = ARRAY['Trailers', 'Deleted Scenes']
   OR special_features = ARRAY['Deleted Scenes', 'Trailers']
ORDER BY title;
