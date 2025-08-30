def divisible_by(numbers, divisor)
  numbers.select{ |a| (a % divisor).zero? } 
end