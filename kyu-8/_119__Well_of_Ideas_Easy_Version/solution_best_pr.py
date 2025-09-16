ideas_rating = {
    3: 'I smell a series!',
    1: 'Publish!',
    0: 'Fail!',
}

def well(x):
    good_ideas_count = x.count('good')    
    for key in ideas_rating:
        if good_ideas_count >= key:
            return ideas_rating[key]


print(well(['bad', 'bad', 'bad']))
print(well(['good', 'bad', 'bad', 'bad', 'bad']))
print(well(['bad', 'good', 'good', 'good', 'bad']))