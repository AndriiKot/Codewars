def abbrev_name(name)
  spl_n = name.split
  "#{spl_n[0][0].upcase}.#{spl_n[1][0].upcase}"
end