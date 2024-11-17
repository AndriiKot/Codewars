function removeExclamationMarks(s) {
  return s.replace(/!/g, '');
}

// Sample Tests:
console.log(removeExclamationMarks('Hello World!'));
console.log(removeExclamationMarks('Hello World!!!'));
console.log(removeExclamationMarks('!Hi'));
console.log(removeExclamationMarks('!Hi! Hi!'));
