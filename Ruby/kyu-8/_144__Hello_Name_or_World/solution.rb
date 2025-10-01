def hello(name = '')
  name = "World" if name == ''
  "Hello, #{name.capitalize}!"
end

# or

def hello(name='World')
  "Hello, #{name.empty? ? 'World' : name.capitalize}!"
end