function fuelPrice(litres, pricePerLitre) {
  let discount = 0;
  let discountForLiter = 0;
  let price = litres * pricePerLitre;

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

  let total = price - discount;
  let normalizeTotal = total.toFixed(2);
  let result = parseFloat(normalizeTotal);
  return result;
}

