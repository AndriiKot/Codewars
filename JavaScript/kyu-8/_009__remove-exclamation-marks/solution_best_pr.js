function removeExclamationMarks(s) {
  return s.replaceAll('!', '');
}

// Sample Tests:
console.log(removeExclamationMarks('Hello World!'));
console.log(removeExclamationMarks('Hello World!!!'));
console.log(removeExclamationMarks('!Hi'));
console.log(removeExclamationMarks('!Hi! Hi!'));
