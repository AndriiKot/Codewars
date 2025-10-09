def arithmetic(a, b, operator)
  op = { "add" => :+, "subtract" => :-, "multiply" => :*, "divide" => :/ }[operator]
  a.send(op, b)
end

# or

def arithmetic(a, b, operator)
 fcn_array = {"add" => a + b,"subtract" => a - b,"multiply" => a * b,"divide" => a.div(b)}
 fcn_array[operator]
end