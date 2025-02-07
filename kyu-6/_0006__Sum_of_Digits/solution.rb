def digital_root(n) = (n=n.to_s.chars.map!(&:to_i).sum while n>=10) || n

p digital_root(132189)