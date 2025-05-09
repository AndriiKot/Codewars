def dont_give_me_five(start_, end_)
  (start_..end_).reject { |el| el.to_s.include? '5' }.size
end