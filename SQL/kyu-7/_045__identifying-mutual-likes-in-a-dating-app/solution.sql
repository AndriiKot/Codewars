SELECT DISTINCT
  LEAST(us1.liker_id, us2.liker_id) AS user1_id,
  GREATEST(us1.liker_id, us2.liker_id) AS user2_id
FROM 
  user_likes us1
INNER JOIN 
  user_likes us2 ON us1.liker_id = us2.liked_id
WHERE 
  us1.liked_id = us2.liker_id
  AND us1.liker_id <> us2.liker_id
ORDER BY 
  user1_id, user2_id;
