const generateHashtag = (str) => {
  const newString = str
    .split(' ')
    .map((w) => {
      const len = w.length;
      if (len > 0) {
        return (w.length === 1 && w[0].toUpperCase()) || (w.length > 1 && w[0].toUpperCase() + w.slice(1));
      }
    })
    .join('');
  const len = newString.length;
  return len < 140 && len > 0 && `#${newString}`;
};

console.log(generateHashtag('Do We have A Hashtag'));
