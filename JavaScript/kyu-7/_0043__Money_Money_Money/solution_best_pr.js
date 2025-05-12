function calculateYears(principal, interest, tax, desired) {
  let years = 0;
  while (principal < desired) {
    const profitBrutto = principal * interest;
    const profitClean = profitBrutto * (1 - tax);
    principal += profitClean;
    years += 1;
  }

  return years;
}
