def nb_dig(n, d, count=0)
    (0..n).each { |i| count += (i*i).to_s.count(d.to_s).to_i }
  count
end
