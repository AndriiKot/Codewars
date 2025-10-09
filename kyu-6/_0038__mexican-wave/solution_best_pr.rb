def wave(str)
  [].tap { |o| str.scan(/\w/) { o.append("#{$`}#{$&.upcase}#{$'}") } }
end # ???

def wave(str)
  str.chars.each_with_index.inject([]) do |res, (char, i)|
    next res if char == ' '
    res << str[0...i] + char.upcase + str[i+1..]
  end
end