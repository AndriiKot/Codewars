function peopleWithAgeDrink(old) {
  let strAnswer = '';

  if (old < 14) {
    strAnswer = 'drink toddy';
  } else if (old < 18) {
    strAnswer = 'drink coke';
  } else if (old < 21) {
    strAnswer = 'drink beer';
  } else {
    strAnswer = 'drink whisky';
  }
  return strAnswer;
}
