def high_and_low(numbers)
	numbers.split.map(&:to_i).minmax.reverse.join(' ')
end
