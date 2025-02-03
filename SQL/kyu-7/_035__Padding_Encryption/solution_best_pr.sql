select RPAD(md5, length(sha256), '1') md5,
       LPAD(sha1, length(sha256), '0') sha1,
       sha256
  from encryption