function getCount(str) {
  const letters = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
  };

  let count = 0;
  const len = str.length;
  for (let i = 0; i < len; i++) {
    if (str[i] in letters) count++;
  }
  return count;
}

console.log(getCount('abracadabra'));
