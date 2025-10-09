def  first_non_repeating_letter(s) 
    s.chars.find {|i| s.downcase.count(i)==1 || s.upcase.count(i)==1} || "" }
end