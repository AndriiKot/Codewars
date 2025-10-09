def mouth_size(animal)
  animal =~ /alligator/i ? "small" : "wide" 
end

# or

def mouth_size(animal)
  animal.match?(/alligator/i) ? "small" : "wide"
end

# or

def mouth_size(animal)
  animal.match(/alligator/i) ? 'small' : 'wide'
end

# or

def mouth_size(animal)
  animal[/^alligator$/i] ? 'small' : 'wide'
end