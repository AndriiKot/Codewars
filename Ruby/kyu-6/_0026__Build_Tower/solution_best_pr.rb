def towerBuilder(n)
  Array.new(n){|k| (' ' * (n - k - 1)) + ('*' * (2 * k + 1)) + (' ' * (n - k - 1))}
end