const stray = (numbers) => {
  numbers.sort();
  return numbers.at(-1) === numbers.at(-2) ? numbers.at(0) : numbers.at(-1);
};
