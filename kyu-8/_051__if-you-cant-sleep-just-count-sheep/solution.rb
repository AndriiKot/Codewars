def count_sheep(num)
  Array.new(num) {|i| "#{i+1} sheep..."}.join
end

p count_sheep(10)