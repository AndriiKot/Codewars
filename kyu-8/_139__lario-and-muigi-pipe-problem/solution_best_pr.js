function pipeFix(numbers) {
  const firstElement = numbers[0];
  const len = numbers.at(-1) - firstElement + 1;
  return Array.from({ length: len }, (_, i) => i + firstElement);
}
