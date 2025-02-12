def increment_string(input)
  input.sub(/\d*$/) { |n| n.empty? ? 1 : n.succ }
end
