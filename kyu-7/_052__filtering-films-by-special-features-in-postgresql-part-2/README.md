# Filtering Films by Special Features in PostgreSQL: Part 2

**Rank:** 7 kyu  
**Category:** reference  
**URL:** [https://www.codewars.com/kata/64536dc25d1ebb000fa7b9b3](https://www.codewars.com/kata/64536dc25d1ebb000fa7b9b3)

---

## 📝 Description

Write a PostgreSQL query that selects `film_id`, the `title` and `special_features` columns from the film table in the DVD rental database, and returns only the films that have `only` "Trailers" and "Deleted Scenes" as their special features. `special_features` is the `text[]` type. It represents a one-dimensional array of values, where each value is of the text data type.

##### Notes:

*  for the sample tests, static dump of [DVD Rental Sample Database](http://www.postgresqltutorial.com/postgresql-sample-database/) is used, for the final solution - random tests.
* The result should be order by title alphabetically, if title is the same - then by film_id in asc order.

### Schema:

#### `film` table:
```
Column            | Type      | Modifiers
------------------+-----------+-----------
film_id           | integer   | not null
title             | varchar   | not null
description       | text      | not null
release_year      | integer   | not null
language_id       | integer   | not null 
rental_duration   | integer   | not null
rental_rate       | numeric   | not null
length            | integer   | not null
replacement_cost  | numeric   | not null
rating            | varchar   | not null
last_update       | timestamp | not null
special_features  | text[]    | not null
```

### Desired Output

The desired output should look like this:
```
film_id | title                             | special_features                       |
--------+-----------------------------------+----------------------------------------|
   32   | A Shawshank Redemption            | {Trailers, Deleted Scenes}             | 
   14   | Monty Python and the Holy Grail   | {Trailers, Deleted Scenes}             |
...
```
