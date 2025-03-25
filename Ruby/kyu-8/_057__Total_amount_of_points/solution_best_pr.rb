def points(games)
  games.sum { |score| [1, 3, 0][score[0] <=> score[2]] }
end
