def sequence_sum(b, e, s)
  (b..e).step(s).reduce(0, :+)
end