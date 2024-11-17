// Codewars solution
{
  function isPythagoreanTriple(nums) {
    const [a, b, c] = nums.sort((a, b) => a - b);

    return a ** 2 + b ** 2 === c ** 2;
  }
}

// My solution
function isPythagoreanTriple(integers) {
  integers.sort((a, b) => a - b);
  return Math.pow(integers[0], 2) + Math.pow(integers[1], 2) === Math.pow(integers[2], 2);
}
