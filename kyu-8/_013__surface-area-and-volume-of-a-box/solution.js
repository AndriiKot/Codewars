const getSize = (width, height, depth) => {
  const surfaceArea = 2 * (depth * width + depth * height + width * height);
  return [surfaceArea, width * height * depth];
};

// Sample Tests:
console.log(getSize(4, 2, 6));
console.log(getSize(5, 5, 5));
console.log(getSize(9, 7, 2));
