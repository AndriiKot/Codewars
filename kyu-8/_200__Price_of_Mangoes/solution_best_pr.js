function mango(quantity, price) {
  const discount = Math.floor(quantity / 3);
  return (quantity - discount) * price;
}
