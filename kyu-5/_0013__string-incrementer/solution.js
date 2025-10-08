function incrementString(input) {
  return input.replace(/(\d*)$/, (match) => {
    const incrementedNumber = match === '' ? '1' : (+match + 1).toString();
    return incrementedNumber.padStart(match.length, '0');
  });
}
