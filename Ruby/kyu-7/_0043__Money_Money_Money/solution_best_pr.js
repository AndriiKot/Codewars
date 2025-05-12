def calculate_years(principal, interest, tax, desired)
  years = 0
    while principal < desired
        profit_brutto = principal * interest
        profit_clean = profit_brutto * (1 - tax)
        principal += profit_clean
        years += 1
    end
  years
end