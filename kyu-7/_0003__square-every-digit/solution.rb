def square_digits(num)
  square_proc = proc { |el| (el.to_i ** 2).to_s }
  num.to_s.chars.inject('') { |result, el| result + square_proc[el] }.to_i
end

square_digits(55)