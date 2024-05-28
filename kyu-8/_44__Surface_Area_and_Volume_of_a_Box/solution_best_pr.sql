SELECT
  width,
  height,
  depth,
  (height * depth + width * depth + width * height) * 2 AS area,
  (width * height * depth) AS volume
FROM
  box
ORDER BY area, volume, width, height;