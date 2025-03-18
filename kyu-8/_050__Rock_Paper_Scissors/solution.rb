$match_result = { 
  won1: 'Player 1 won!',
  won2: 'Player 2 won!',
  draw: 'Draw!',
}

$combinations = {
  [:scissors, :paper] => $match_result[:won1],
  [:paper, :rock] => $match_result[:won1],
  [:rock, :scissors] => $match_result[:won1],
}

def rps(p1, p2)
  p1, p2 = p1.to_sym, p2.to_sym
  p1 == p2 ? $match_result[:draw] : $combinations[[p1, p2]] || $match_result[:won2]
end

p rps("paper", "scissors")
p rps('scissors', 'paper')
p rps('rock', 'rock')