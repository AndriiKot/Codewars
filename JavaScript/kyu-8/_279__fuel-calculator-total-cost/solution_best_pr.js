// Best Practices
function fuelPrice1(litres, pricePerLitre) {
  for (i = 2; i <= 10; i += 2) if (litres >= i) pricePerLitre -= 0.05;
  return +(litres * pricePerLitre).toFixed(2);
}

// My solution

function fuelPrice2(litres, pricePerLitre) {
  let discount = 0;
  let discountForLiter = 0;
  const price = litres * pricePerLitre;

  if (litres >= 2) {
    discountForLiter = 0.05;
    if (litres >= 4) {
      discountForLiter = 0.1;
      if (litres >= 6) {
        discountForLiter = 0.15;
        if (litres >= 8) {
          discountForLiter = 0.2;
          if (litres >= 10) {
            discountForLiter = 0.25;
          }
        }
      }
    }
  }
  if (discountForLiter) discount = discountForLiter * litres;

  const total = price - discount;
  const normalizeTotal = total.toFixed(2);
  const result = parseFloat(normalizeTotal);
  return result;
}

console.log(fuelPrice2(10, 10));
console.log(fuelPrice1(10, 10));
