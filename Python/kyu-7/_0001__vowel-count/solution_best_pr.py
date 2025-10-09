def get_count(sentence):
	return sum([1 for chr in sentence if chr in 'aeiou'])
