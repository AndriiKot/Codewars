SELECT
  project,
  commits,
  contributors,
  REGEXP_REPLACE(address, '[[:digit:]]', '!', 'g') AS address
FROM
    repositories;