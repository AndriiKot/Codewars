def feast(beast, dish)
  [0, -1].all? { |i| beast[i] == dish[i] }
end

p feast("great blue heron", "garlic naan")
p feast("brown bear", "bear claw")