function saleHotdog1(n) {
  return n * (n < 5 ? 100 : n < 10 ? 95 : 90);
}

function saleHotdogs2(n) {
  let price = 100;
  if (n > 9) {
    price = 90;
  } else if (n > 4) {
    price = 95;
  }
  return n * price;
}
