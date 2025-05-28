def sort_array(source_array)
  odds = source_array.select(&:odd?).sort
  source_array.map { |n| n.even? ? n : odds.shift }
end