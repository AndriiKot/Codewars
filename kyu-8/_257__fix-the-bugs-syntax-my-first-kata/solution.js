const myFirstKata = (a, b) => {
  return typeof a == 'number' && typeof b == 'number' ? (a % b) + (b % a) : false;
};
