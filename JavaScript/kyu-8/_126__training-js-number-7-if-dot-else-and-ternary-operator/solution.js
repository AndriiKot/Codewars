function saleHotdogs(n) {
  let price = 100;
  if (n > 9) {
    price = 90;
  } else if (n > 4) {
    price = 95;
  }
  return n * price;
}

console.log(saleHotdogs(3));
console.log(saleHotdogs(5));
