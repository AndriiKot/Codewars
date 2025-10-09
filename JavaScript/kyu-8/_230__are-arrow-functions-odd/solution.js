function odds(values) {
  return values.filter((number) => (number & 1) == 1);
}

console.log(odds([1, 2, 3, 4, 5]));
