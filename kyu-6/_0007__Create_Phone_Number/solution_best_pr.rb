def create_phone_number(numbers,i=-1)
  inc_i = proc { i += 1 }  
  '(xxx) xxx-xxxx'.gsub('x') { numbers[inc_i[]] }  
end