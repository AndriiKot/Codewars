function howMuchILoveYou(nbPetals) {
  let answer;
  const answers = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];

  if (nbPetals < 7) {
    answer = answers[nbPetals - 1];
  } else {
    nbPetals = nbPetals % 6;
    if (nbPetals === 0) {
      nbPetals = 6;
    }
    answer = answers[nbPetals - 1];
  }

  return answer;
}
