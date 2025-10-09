def descending_order(n)
  n.to_s.chars.sort! { |a, b| b.to_i - a.to_i }.join.to_i
end

p descending_order('12345')