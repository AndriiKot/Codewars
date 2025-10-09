SELECT
  SUBSTRING(project, 1, commits) AS project,
  SUBSTRING(address, LENGTH(address) - contributors + 1, contributors) AS address
FROM
  repositories;
