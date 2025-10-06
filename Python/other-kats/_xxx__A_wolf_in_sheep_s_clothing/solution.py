def warn_the_sheep(queue):
    queue.reverse()
    index_wolf = queue.index('wolf')
    if (index_wolf):
        return f'Oi! Sheep number {index_wolf}! You are about to be eaten by a wolf!'
    else:
        return 'Pls go away and stop eating my sheep'

# or

def warn_the_sheep(queue):
    n = len(queue) - queue.index('wolf') - 1
    return f'Oi! Sheep number {n}! You are about to be eaten by a wolf!' if n else 'Pls go away and stop eating my sheep'