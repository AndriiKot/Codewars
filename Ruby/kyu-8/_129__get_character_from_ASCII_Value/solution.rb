def get_char(c) = c.chr

# or 

define_method :getChar, &:chr

# or

def getChar(c)
  c.send(:chr)
end

