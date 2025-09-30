def triple_trouble(one, two, three)
  Array.new(one.size) { |i| "#{one[i]}#{two[i]}#{three[i]}" }.join
end


# or

def triple_trouble(one, two, three)
  one.chars.zip(two.chars, three.chars).join("")
end

# or

def triple_trouble(*strings)
  strings.map(&:chars).transpose.join
end

# or

def triple_trouble(one, two, three)
  [one, two, three].map(&:chars).transpose.join
end

