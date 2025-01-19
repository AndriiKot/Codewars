def square_sum(arr_numbers)
	square_proc = proc { |num| num ** 2 }
	arr_numbers.reduce(0) { |acc, num| square_proc[num] + acc }	  
end