def order_weight(str)
  str.split.sort!.sort! { |a, b| a.split('').map!(&:to_i).sum <=> b.split('').map!(&:to_i).sum }.join(' ')
end


order_weight('103 123 4444 99 2000');