SELECT
   name,
   SUM(won) as won,
   SUM(lost) as lost
FROM
  fighters
  inner join winning_moves on fighters.move_id = winning_moves.id
WHERE 
  winning_moves.move NOT IN ('Hadoken', 'Shouoken', 'Kikoken')
GROUP BY
  name
ORDER BY
  won DESC
LIMIT 6;