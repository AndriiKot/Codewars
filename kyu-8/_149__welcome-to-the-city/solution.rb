def say_hello(name, city, state)
  "Hello, #{name.join(' ')}! Welcome to #{city}, #{state}!"
end

# or

def say_hello(name, city, state)
  "Hello, %s! Welcome to %s, %s!" % [name.join(" "), city, state]
end
