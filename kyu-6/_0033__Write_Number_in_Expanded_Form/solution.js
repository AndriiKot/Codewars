function expandedForm(num) {
  return `${num}`
    .split('')
    .reduce((acc, digit, index, arr) => {
      if (digit !== '0') {
        acc.push(digit + '0'.repeat(arr.length - (index + 1)));
      }
      return acc;
    }, [])
    .join(' + ');
}
