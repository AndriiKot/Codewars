def name_shuffler(str)
  str.split.reverse.join(' ')
end

# or

def name_shuffler(str)
  a, b = str.split
  return "#{b} #{a}"
end