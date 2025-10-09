def digitize(n) = n.to_s.reverse!.split('').map!(&:to_i)

p digitize(12345)