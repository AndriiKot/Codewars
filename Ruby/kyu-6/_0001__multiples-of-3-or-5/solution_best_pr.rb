def solution(number)
  (1...number).select {|i| i%3==0 || i%5==0}.inject(:+)
end