function uefaEuro2016(teams, scores) {
  const team1 = teams[0];
  const team2 = teams[1];
  const score1 = scores[0];
  const score2 = scores[1];
  return `At match ${team1} - ${team2}, ${
    score1 == score2
      ? "teams played draw."
      : score1 > score2
      ? `${team1} won!`
      : `${team2} won!`
  }`;
}
