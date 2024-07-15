SELECT
  project,
  commits,
  contributors,
  REGEXP_REPLACE(address, '[[:digit:]]', '!', 'g') AS address
FROM
    repositories;

-- Other solution

SELECT project, commits, contributors, REGEXP_REPLACE(address, '[0-9]', '!', 'g') AS address FROM repositories;

select project, commits, contributors, REGEXP_REPLACE(address, '\d', '!', 'g') as  address from repositories;

select r.project,
       r.commits,
       r.contributors,
       regexp_replace(r.address , '\d','!','g') as address
from repositories r;