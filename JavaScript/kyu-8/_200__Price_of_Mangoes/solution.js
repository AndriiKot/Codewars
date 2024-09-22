function mango(quantity, price) {
  const discount = Math.floor(quantity / 3);
  return (quantity - discount) * price;
}

console.log(mango(2, 3));
console.log(mango(3, 3));
console.log(mango(5, 3));
