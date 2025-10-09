geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
is_not_goose = lambda bird: bird not in geese

def goose_filter(birds):
    return list(filter(is_not_goose, birds))