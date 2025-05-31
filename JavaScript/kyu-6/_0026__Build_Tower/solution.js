function towerBuilder(nFloors) {
  return Array.from({ length: nFloors }, (_, i) => {
    const spaces = ' '.repeat(nFloors - i - 1);
    const stars = '*'.repeat(i * 2 + 1);
    return `${spaces}${stars}${spaces}`;
  });
}

console.log(towerBuilder(3));
