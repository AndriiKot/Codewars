def greet(name,owner) 
  "Hello #{name == owner ? 'boss' : 'guest'}"
end


p greet('Andrii', 'Andrii')