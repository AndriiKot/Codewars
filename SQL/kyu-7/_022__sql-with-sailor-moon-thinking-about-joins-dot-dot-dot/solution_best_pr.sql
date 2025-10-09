SELECT
   senshi_name AS sailor_senshi,
   real_name_jpn AS real_name,
   name AS cat,
   school
FROM
  sailorsenshi
    LEFT OUTER JOIN cats ON cats.id = sailorsenshi.cat_id
    LEFT OUTER JOIN schools ON schools.id = sailorsenshi.school_id;
