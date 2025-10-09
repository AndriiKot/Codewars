def find_next_square(sq)
  sqr_fl = Math.sqrt(sq)
  sqr_int = sqr_fl.to_i
  sqr_fl == sqr_int ? sqr_int.next.pow(2) : -1
end

