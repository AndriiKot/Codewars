function digitize(n) {
  return n.toString().split('').reverse().map(Number);
}

// sample tests
console.log(digitize(35231))