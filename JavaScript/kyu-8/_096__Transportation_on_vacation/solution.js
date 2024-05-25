function rentalCarCost(d) {
  let discount = 0;
  const sum = 40 * d;
  if (d > 6) discount = 50;
  else if (d > 2) discount = 20;
  return sum - discount;
}
