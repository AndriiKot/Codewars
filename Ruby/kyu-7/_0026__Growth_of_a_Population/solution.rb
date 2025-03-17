def nb_year(p0, percent, aug, p, year=0)
  while p0 < p
    p0 += (p0 * percent / 100 + aug).to_i
    year += 1
  end 
  year
end

p nb_year(1500, 5, 100, 5000)