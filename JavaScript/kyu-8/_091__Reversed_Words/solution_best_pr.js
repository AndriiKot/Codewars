function reverseWords1(str) {
  return str.split(" ").reverse().join(" ");
}

function reverseWords2(str) {
  let newString = "";

  const arrWords = str.split(" ");

  newString += " " + arrWords.pop();

  while (arrWords.length > 0) {
    newString += " " + arrWords.pop();
  }

  return newString.trim();
}
