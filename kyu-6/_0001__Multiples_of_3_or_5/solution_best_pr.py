def solution(number):
	return sum([(n % 5 == 0 and n or n % 3 == 0 and n)for n in list(range(3, number))])

print(solution(10))
        
  