PHRASES = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all',
]

def how_much_i_love_you(nb_petals)
  PHRASES[nb_petals % PHRASES.size - 1]
end