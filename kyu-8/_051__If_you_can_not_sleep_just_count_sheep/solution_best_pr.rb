def count_sheep1(num)
  (1..num).map {|i| "#{i} sheep..."}.join
end


def count_sheep2(num)  
  (1..num).reduce("") { |acc, n| acc << "#{n} sheep..." }
end