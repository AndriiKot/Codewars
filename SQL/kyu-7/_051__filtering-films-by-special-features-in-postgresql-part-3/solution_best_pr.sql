SELECT film_id, title, special_features
  FROM film
  WHERE ('Deleted Scenes' = ANY(special_features)) != ('Behind the Scenes' = ANY(special_features))
    AND NOT 'Commentaries' = ANY(special_features)
  ORDER BY title, film_id;