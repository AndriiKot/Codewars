const peopleWithAgeDrink1 = (age) =>
  age < 14
    ? "drink toddy"
    : age < 18
    ? "drink coke"
    : age < 21
    ? "drink beer"
    : "drink whisky";

function peopleWithAgeDrink2(old) {
  let strAnswer = "";

  if (old < 14) {
    strAnswer = "drink toddy";
  } else if (old < 18) {
    strAnswer = "drink coke";
  } else if (old < 21) {
    strAnswer = "drink beer";
  } else {
    strAnswer = "drink whisky";
  }
  return strAnswer;
}

