def combat(health, damage):
    return max(0, health-damage)

# or

def combat(health, damage):
    return max(health - damage, 0)