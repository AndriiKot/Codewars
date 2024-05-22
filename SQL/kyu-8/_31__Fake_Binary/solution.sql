SELECT
  x,
  REGEXP_REPLACE(REGEXP_REPLACE(x, '[01234]', '0', 'g'), '[56789]', '1','g') AS res
FROM
  fakebin;

