def series_sum(n)
  res, step, count = 0, 3, 1

  n.times do
    res += 1.0 / count
    count += step
  end

  "%.2f" % res
end

=begin
or
def series_sum(n)
  '%.2f' % (0...n).inject(0){ |sum, i| sum + 1.0/(1+i*3) }
end
=end
