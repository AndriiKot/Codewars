CREATE OR REPLACE FUNCTION RemoveExclamationMarks (s TEXT)
RETURNS TEXT
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN TRANSLATE(s, '!', '');
END $$;

SELECT
  s,
  RemoveExclamationMarks(s) res
FROM
  removeexclamationmarks;