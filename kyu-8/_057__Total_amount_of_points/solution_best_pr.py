beat = {
    lambda t1, t2: t1 < t2: 0,
    lambda t1, t2: t1 > t2: 3,
    lambda t1, t2: t1 == t2: 1,
}

def points(games):
    points = 0
    for game in games:
        t1, t2 = map(int, game.split(":"))
        for result, point in beat.items():
            if result(t1, t2):
                points += point
                break 
    return points

print(points(["3:1", "2:2", "0:1"]))
