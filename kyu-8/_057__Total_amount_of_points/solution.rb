BEAT = {
  proc { |t1, t2| t1 < t2 } => 0,
  proc { |t1, t2| t1 > t2 } => 3,
  proc { |t1, t2| t1 == t2 } => 1,   
}

def points(games)
  points = 0
  games.each do |game|
    t1, t2 = game.split(':').map(&:to_i)
    BEAT.each do |result, point|
      if result[t1, t2] 
        points += point
        break
      end   
    end
  end
  points
end

p points(["3:1", "2:2", "0:1"])