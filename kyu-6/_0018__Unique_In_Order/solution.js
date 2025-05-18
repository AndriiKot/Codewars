const uniqueInOrder = (iterable) => {
  const uniqueIterable = [];
  for (let i = 0; iterable.length > i; i++) {
    if (iterable[i] != uniqueIterable.at(-1)) uniqueIterable.push(iterable[i]);
  }
  return uniqueIterable;
};

console.log(uniqueInOrder('AAAABBBCCDAABBB'));
console.log(uniqueInOrder('aaaaabc'));
console.log(uniqueInOrder([1, 2, 3, 3, 1, 1]));
console.log(uniqueInOrder([]));
console.log(uniqueInOrder(''));
