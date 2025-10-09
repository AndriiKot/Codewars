def create_phone_number(numbers,i=-1)
  inc_i = proc { i += 1 }  
  '(xxx) xxx-xxxx'.gsub('x') { numbers[inc_i[]] }  
end

p (create_phone_number([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
