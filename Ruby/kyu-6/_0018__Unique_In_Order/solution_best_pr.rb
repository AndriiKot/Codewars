def unique_in_order(iterable)
  (iterable.is_a?(String) ? iterable.chars : iterable).chunk { |x| x }.map(&:first)
end

# or
def unique_in_order(iterable)
  it_array= []
  iterable.length.times do |x|
    it_array << iterable[x] if iterable[x] != iterable[x+1]
  end
  it_array
end