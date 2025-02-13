def scramble(s1,s2)
  s2.chars.uniq.all?{|x| s2.count(x)<=s1.count(x)}
end
