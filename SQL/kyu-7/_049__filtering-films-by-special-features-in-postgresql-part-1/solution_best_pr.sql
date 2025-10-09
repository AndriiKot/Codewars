select film_id, title, special_features
from film
where array['Trailers', 'Deleted Scenes'] <@ special_features
order by title, film_id;
