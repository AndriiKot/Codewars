def pig_it1(s) = s.gsub(/\w+/) { |w| "#{w[1..-1]}#{w[0]}ay"}

def pig_it2(s) = s.gsub(/\w+/, &->(w) { "#{w[1..-1]}#{w[0]}ay" })

def pig_it3(s)
  s.gsub(/\w+/) do |word|
    "#{word[1..-1]}#{word[0]}ay"
  end
end
