const LETTER_FREQUENCIES = Object.freeze({
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
});

const scoreWord = (word) => {
  let score = 0;
  for (const char of word.toLowerCase()) {
    score += LETTER_FREQUENCIES[char];
  }
  return score;
};

function high(s) {
  const wordCounts = {};
  for (const word of s.match(/\S+/g)) {
    wordCounts[word] = scoreWord(word);
  }

  let highestWord = '';
  let highestScore = 0;
  for (const [word, score] of Object.entries(wordCounts)) {
    if (score > highestScore) {
      highestWord = word;
      highestScore = score;
    }
  }

  return highestWord;
}
