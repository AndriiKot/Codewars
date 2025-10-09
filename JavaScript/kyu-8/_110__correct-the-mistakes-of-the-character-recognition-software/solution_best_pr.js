const corrections = {
  5: 'S',
  0: 'O',
  1: 'I',
};

const correct1 = (string) => string.replace(/[501]/g, (character) => corrections[character]);
