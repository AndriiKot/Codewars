def divisors(n)
  (1..Math.sqrt(n).to_i).inject(0) do |count, i|
    if n % i == 0
      if i == n / i
        count + 1
      else
        count + 2
      end
    else
      count
    end
  end
end