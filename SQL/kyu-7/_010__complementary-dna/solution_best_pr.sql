SELECT
  dna,
  TRANSLATE(dna, 'ATGC', 'TACG') AS res
FROM
  dnastrand;