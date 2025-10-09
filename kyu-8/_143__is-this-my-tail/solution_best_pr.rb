def correct_tail(body, tail) = tail == body[-1]

# or 

def correct_tail(body, tail)
  body.end_with? tail
end