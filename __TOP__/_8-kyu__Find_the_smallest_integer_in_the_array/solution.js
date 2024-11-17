class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.reduce((a, b) => Math.min(a, b));
  }
}
