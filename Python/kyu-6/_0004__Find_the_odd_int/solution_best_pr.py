find_it = lambda seq: __import__('functools').reduce(lambda x, y: x^y, seq, 0)
