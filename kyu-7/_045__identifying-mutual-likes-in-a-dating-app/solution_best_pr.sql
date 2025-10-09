select least(liker_id,liked_id) user1_id, greatest(liker_id,liked_id) user2_id
from user_likes
group by 1, 2
having count(distinct liker_id) = 2