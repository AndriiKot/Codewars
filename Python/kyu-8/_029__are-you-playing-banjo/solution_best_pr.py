import re

def are_you_playing_banjo(name):
    res = f'{name} does not play banjo'
    if (re.search(r'^[r]',name, re.IGNORECASE)):
        res = f'{name} plays banjo'
    return res
        


are_you_playing_banjo('R Andrii')