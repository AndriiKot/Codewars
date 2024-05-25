function pipeFix(numbers) {
  const firstElement = numbers[0];
  const len = numbers.at(-1) - firstElement + 1;
  return Array.from({ length: len }, (_, i) => i + firstElement);
}

console.log(pipeFix([1, 2, 3, 5, 6, 8, 9]));
