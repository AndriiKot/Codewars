def scramble(s1,s2)
  chars = s2.split('').uniq
  res = true
  chars.each do |c|
    if s2.count(c) > s1.count(c)
      res = false && break
    end    
  end
  res
end

p scramble('rkqodlw', 'world')
p scramble('cedewaraaossoqqyt', 'codewars')
p scramble('katas', 'steak')