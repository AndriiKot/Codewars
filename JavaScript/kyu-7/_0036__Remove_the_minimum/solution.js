function removeSmallest(numbers) {
  const min = Math.min(...numbers);
  let flag = true;

  return Array.from({ length: numbers.length - 1 }, (_, i) => {
    if (flag) {
      if (numbers[i] !== min) return numbers[i];
      flag = false;
    }
    return numbers[i + 1];
  });
}

console.log(removeSmallest([5, 1, 5, 1]));
