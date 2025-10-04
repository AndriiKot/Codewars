def generate_range(min, max, step)
  (min..max).%(step).to_a
end

# or

def generate_range(min, max, step)
  min.step(max, step).to_a
end