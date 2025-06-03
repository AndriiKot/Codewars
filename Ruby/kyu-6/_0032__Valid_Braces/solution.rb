def valid_braces(s)
  stack = []
  couples = { '(' => ')', '[' => ']', '{' =>'}' }
  startItem = '([{'
  s.each_char do |item|
    if (startItem.include?(item))
      stack.push(item)
    else
      if (stack.length === 0 || couples[stack.pop()] != item)
        return false
      end
    end

  end
  stack.size == 0;
end
