beats = { 'scissors': 'paper', 'paper': 'rock', 'rock': 'scissors' }

def rps(p1, p2):
    res = 'Draw!'
    if beats[p1] == p2:
        res = 'Player 1 won!'
    elif beats[p2] == p1:
        res = 'Player 2 won!'
    return res

print(rps('scissors', 'rock'))