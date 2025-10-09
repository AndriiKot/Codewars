SELECT
  md5 || REPEAT('1', LENGTH(sha256) - LENGTh(md5)) AS md5,
  REPEAT('0', LENGTH(sha256) - LENGTH(sha1)) || sha1 AS sha1,
  sha256
FROM
  encryption;