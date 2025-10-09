const reverseWords = (str) => {
  return str
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
};

console.log(reverseWords('This is an example!'));
