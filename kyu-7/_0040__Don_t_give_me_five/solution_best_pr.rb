def dont_give_me_five(start_, end_)
  (start_..end_).reject { |el| el.to_s.include? '5' }.size
end

# or

def dont_give_me_five(start,end_)
  (start..end_).count { | i | not i.to_s.include? '5' }
end