SELECT id, name, POSITION(',' in characteristics) as comma FROM monsters
ORDER BY comma ASC;


SELECT id, name, POSITION(',' IN characteristics) as comma FROM monsters ORDER BY comma;
