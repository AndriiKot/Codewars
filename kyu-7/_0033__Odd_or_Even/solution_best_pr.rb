def odd_or_even(array)
  array.sum.even? ? 'even' : 'odd'
end



=begin
or

def odd_or_even(array)
  array.reduce(0, :+).even? ? 'even' : 'odd'
end

def odd_or_even(array)
  array.reduce(&:+).even? ? 'even' : 'odd'
end

=end