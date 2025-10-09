class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.reduce((a, b) => Math.min(a, b));
  }
  findSmallestInt2(args) {
    return args.reduce((a, b) => (a < b ? a : b));
  }
}

// sample tests:
const result = new SmallestIntegerFinder();
console.log(result.findSmallestInt([78, 56, 232, 12, 8]));
console.log(result.findSmallestInt([78, 56, 232, 12, 18]));
console.log(new SmallestIntegerFinder().findSmallestInt([78, 56, 232, 12, 18]) === 12);

// sample tests 2:
console.log(result.findSmallestInt2([78, 56, 232, 12, 8]));
console.log(result.findSmallestInt2([78, 56, 232, 12, 18]));
console.log(new SmallestIntegerFinder().findSmallestInt2([78, 56, 232, 12, 18]) === 12);
