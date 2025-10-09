def replaceDots(str)
  str.tr('.', '-')
end

# or

def replaceDots(str)
  str.gsub(/\./, '-')
end

# or

def replaceDots(str)
  str.tr ?.,?-
end
