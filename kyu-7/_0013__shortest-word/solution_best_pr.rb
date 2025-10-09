def find_short(s)
  s.split.map(&:size).min
end