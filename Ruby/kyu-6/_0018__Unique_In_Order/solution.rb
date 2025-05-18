def unique_in_order(iterable)
  return [] if iterable.empty?
  unique_iterable = [iterable[0]] 
  valid_iterable = iterable.is_a?(String) ? iterable.split('') : iterable
  valid_iterable[1..-1].each { |el|
    unique_iterable.push(el) if unique_iterable[-1] != el
  }
  unique_iterable
end


p unique_in_order('AAAABBBCCDAABBB')
p unique_in_order('aaaaabc')
p unique_in_order([1, 2, 3, 3, 1, 1])
p unique_in_order([])
p unique_in_order('')