def count_positives_sum_negatives(arr)
  res = []
  unless arr.empty?
    even_count, negative_sum = 0, 0
    arr.each do |int|
      if int > 0
        even_count += 1
      else
        negative_sum += int
      end
    end
    res = [even_count, negative_sum]
  end
  res   
end

p count_positives_sum_negatives([1, 2, 3]);
