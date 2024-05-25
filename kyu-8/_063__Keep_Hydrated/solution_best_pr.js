function litres1(time) {
  return Math.floor(time * 0.5);
}

function litres2(time) {
  return Math.floor(time / 2);
}

// sample tests
console.log(litres1(2));  // 1
console.log(litres2(2)); // 1
