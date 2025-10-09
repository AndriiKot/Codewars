def simple_multiplication(number)
  number * (number & 1 === 1 ? 9 : 8)
end