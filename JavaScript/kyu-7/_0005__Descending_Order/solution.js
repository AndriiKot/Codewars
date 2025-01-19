function descendingOrder(n) {
  return +n.toString().split('').sort().reverse().join('');
}

console.dir(descendingOrder(5321));
