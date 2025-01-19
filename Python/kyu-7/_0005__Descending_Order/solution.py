def descending_order(num):
	return int(''.join([n for n in sorted(list(str(num)), reverse=True)]))

print(descending_order(56123))