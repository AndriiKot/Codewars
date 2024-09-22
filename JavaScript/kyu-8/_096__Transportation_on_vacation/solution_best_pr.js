const rentalCarCost1 = (d) => d * 40 - (d > 6 ? 50 : d > 2 ? 20 : 0);

function rentalCarCost2(d) {
  let discount = 0;
  const sum = 40 * d;
  if (d > 6) discount = 50;
  else if (d > 2) discount = 20;
  return sum - discount;
}
