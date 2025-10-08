function divisors(integer) {
  const arr = [];
  let count = 2;

  while (count < integer) {
    if (integer % count === 0) {
      arr.push(count);
    }
    count++;
  }
  return arr.length === 0 ? `${integer} is prime` : arr;
}

console.log(divisors(13));
