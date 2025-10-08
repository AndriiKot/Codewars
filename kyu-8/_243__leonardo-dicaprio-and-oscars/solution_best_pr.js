function duckDuckGoose(players, goose) {
  const len = players.length;
  const player = players[(goose - 1 + len) % len];
  return player.name;
}
