function digitize1(n) {
  return Array.from(String(n), Number).reverse();
}

function digitize2(n) {
  return n.toString().split("").reverse().map(Number);
}

// sample tests
console.log(digitize1(35231), [1, 3, 2, 5, 3]);
console.log(digitize2(35231), [1, 3, 2, 5, 3]);
