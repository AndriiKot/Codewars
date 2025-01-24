def solution(number)
  result = 0
  number -= 1
  if number > 2
	number.downto(3) do |i|
      result += (i % 5 == 0 && i) || (i % 3 == 0 && i) || 0
    end
  end
  result
end

p solution(10)