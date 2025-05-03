function oddOrEven(array) {
  const sum = array.reduce((curr, next) => curr + next, 0);
  return sum & 1 ? 'odd' : 'even';
}
