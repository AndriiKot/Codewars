def nb_year(p0, percent, aug, p, age=0)
  while p0 < p
    p0 += (p0 * percent / 100 + aug).to_i
    age += 1
  end 
  age
end

p nb_year(1500, 5, 100, 5000)