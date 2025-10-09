def reverse(str)
  str.split.reverse*' '
end

# or

def reverse(str)
  str.split.reverse.join(' ')
end