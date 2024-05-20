function warnTheSheep1(queue) {
  const position = queue.reverse().indexOf("wolf");
  return position === 0
    ? "Pls go away and stop eating my sheep"
    : `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`;
}

function warnTheSheep2(queue) {
  const newArrayReverse = [...queue].reverse();
  const wolfPosition = newArrayReverse.indexOf("wolf");
  const answer =
    wolfPosition === 0
      ? "Pls go away and stop eating my sheep"
      : `Oi! Sheep number ${wolfPosition}! You are about to be eaten by a wolf!`;
  return answer;
}


