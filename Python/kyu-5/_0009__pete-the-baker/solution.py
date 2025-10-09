def cakes(recipe, available):
    portions = []
    for key in recipe:
        has = available.get(key, 0)
        if has == 0:
            return 0
        needs = recipe[key]
        portions.append(has // needs)
    return min(portions) 

print(cakes({"flour": 10, "sugar": 200, "eggs": 1}, {"flour": 1200, "sugar": 1200, "eggs": 5, "milk": 200}))
