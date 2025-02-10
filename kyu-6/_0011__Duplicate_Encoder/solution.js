function duplicateEncode(word, res = '') {
  word = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    res += word.split(word[i]).length - 1 == 1 ? '(' : ')';
  }
  return res;
}

console.log(duplicateEncode('HII!'));
