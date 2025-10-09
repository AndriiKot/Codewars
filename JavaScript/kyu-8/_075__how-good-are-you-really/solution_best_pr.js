function betterThanAverage1(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
}

function betterThanAverage2(classPoints, yourPoints) {
  const len = classPoints.length;
  return yourPoints > classPoints.reduce((a, b) => a + b) / len;
}
