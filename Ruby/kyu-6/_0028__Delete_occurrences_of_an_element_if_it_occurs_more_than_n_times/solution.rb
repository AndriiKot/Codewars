def delete_nth(order, max_e)
  count_order = Hash.new(0)
  order.select do |num|
    count_order[num] += 1
    count_order[num] <= max_e
  end
end

p delete_nth([20,37,20,21], 1)
p delete_nth([1,1,3,3,7,2,2,2,2], 3) # [1, 1, 3, 3, 7, 2, 2, 2]
p delete_nth([12,39,19,39,39,19,12], 1)