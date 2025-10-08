const getNumberFromStr = (str) => +str.replace(/\D/g, '');

const order = (words) => {
  const arrWords = [];
  words.split(' ').forEach((word) => {
    arrWords[getNumberFromStr(word) - 1] = word;
  });
  return arrWords.join(' ');
};

console.log(order('is2 Thi1s T4est 3a'));
