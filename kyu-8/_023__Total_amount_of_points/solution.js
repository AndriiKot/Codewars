function points(games) {
  let total = 0;
  games.forEach((game) => {
    const [x, y] = [game.at(0), game.at(-1)];
    if (x > y) total += 3;
    if (x == y) total++;
  });
  return total;
}

console.log(points(['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:4', '4:3']));
