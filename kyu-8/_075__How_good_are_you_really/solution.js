function betterThanAverage(classPoints, yourPoints) {
  const len = classPoints.length;
  return yourPoints > classPoints.reduce((a, b) => a + b) / len;
}
