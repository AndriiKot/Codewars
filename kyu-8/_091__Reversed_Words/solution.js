function reverseWords(str) {
  let newString = '';

  const arrWords = str.split(' ');

  newString += ' ' + arrWords.pop();

  while (arrWords.length > 0) {
    newString += ' ' + arrWords.pop();
  }

  return newString.trim();
}

console.log(reverseWords('The greatest victory is that which requires no battle'));
