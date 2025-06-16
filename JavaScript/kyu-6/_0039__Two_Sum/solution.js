function twoSum(numbers, target) {
  const seen = {};
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    const complement = target - number;
    if (Object.hasOwn(seen, complement)) {
      return [seen[complement], i];
    }
    seen[number] = i;
  }
  return [];
}
