def find_multiples(base, limit)
  multiples = []
  current = base
  begin
    multiples << current
    current += base
  end while current <= limit
  multiples
end