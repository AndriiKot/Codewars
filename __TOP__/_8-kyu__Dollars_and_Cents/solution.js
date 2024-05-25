function formatMoney(amount) {
  return "$" + amount.toFixed(2);
}

console.log(formatMoney(1.2345)); // $1.23
console.log(formatMoney(1.5)); // $1.50
console.log(formatMoney(2)); // $2.00
