def expanded_form(num)
  num.to_s.chars.each_with_index.reduce([]) do |acc, (digit, index)|
    if digit != '0'
      acc << "#{digit}#{'0' * (num.to_s.length - index - 1)}"
    end
    acc
  end.join(' + ')
end