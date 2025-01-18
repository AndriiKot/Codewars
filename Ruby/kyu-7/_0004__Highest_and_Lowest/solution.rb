def high_and_low(numbers)
  arrSortInt = numbers.split.map!(&:to_i).sort!
  "#{arrSortInt[-1]} #{arrSortInt[0]}"
end

p high_and_low('5 4 3 2 1')