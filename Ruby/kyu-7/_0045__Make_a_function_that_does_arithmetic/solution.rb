MATH_OPERATIONS = {
  "add" => ->(a, b) { a + b },
  "subtract" => ->(a, b) { a - b },
  "multiply" => ->(a, b) { a * b },
  "divide" =>  ->(a, b) { a / b },
};

def arithmetic(a, b, operator)
  MATH_OPERATIONS[operator][a, b]
end

p arithmetic(1, 2, 'add')
