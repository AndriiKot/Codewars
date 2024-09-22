function isPythagoreanTriple(integers) {
  integers.sort((a, b) => a - b);
  return (
    Math.pow(integers[0], 2) + Math.pow(integers[1], 2) ===
    Math.pow(integers[2], 2)
  );
}
