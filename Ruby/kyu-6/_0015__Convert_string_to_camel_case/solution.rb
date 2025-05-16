def to_camel_case(str)
  str.split(/-|_/).map!.with_index do |word, i| 
    i == 0 ? word : word.capitalize
  end.join
end
