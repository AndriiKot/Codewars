function billboard(name, price = 30) {
  let cost = 0;
  const len = name.length;
  for (let i = 0; i < len; i++) {
    cost += price;
  }
  return cost;
}
