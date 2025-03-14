def nb_year(p0, percent, aug, p, years=0)
     p0 < p ? nb_year((p0 + (percent / 100.0 * p0).to_i + aug), percent, aug, p, years+1) : years
end
