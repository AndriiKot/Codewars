function findMissingLetter(array) {
  let letter = array[0];

  for (let i = 0; i < array.length; i++) {
    if (letter !== array[i]) return letter;
    letter = String.fromCharCode(letter.charCodeAt(0) + 1);
  }
}

console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']));
