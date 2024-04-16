SELECT id, BIT_LENGTH(name) as name, birthday, BIT_LENGTH(race) as race
FROM demographics;

select
  id,
  bit_length(name) as name,
  birthday,
  bit_length(race) as race
from demographics;