const firstNonRepeatingLetter = (s) => {
  let res = '';
  const len = s.length;
  const lowerString = s.toLowerCase();
  for (let i = 0; i < len; i++) {
    if (lowerString.split(lowerString[i]).length - 1 === 1) {
      res = s[i];
      break;
    }
  }
  return res;
};
