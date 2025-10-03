def multi_table(n)
  Array.new(10) do |i| 
    times = i + 1
   "#{times} * #{n} = #{times * n}"
  end.join("\n")
end

# or

def multiTable(number)
  (1..10).map { |i| "#{i} * #{number} = #{i*number}" }.join("\n")
end


