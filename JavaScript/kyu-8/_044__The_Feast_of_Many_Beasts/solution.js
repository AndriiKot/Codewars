function feast(beast, dish) {
  const reg = /^[a-zA-Z]|[A-Z][a-z]$/;
  let answer = false;
  let letterFirst = beast.at(0);
  let letterLast = beast.at(-1);

  if (reg.test(letterFirst) && reg.test(letterLast)) {
    answer = letterFirst === dish.at(0) && letterLast === dish.at(-1);
  }
  return answer;
}

// Sample Tests:
console.log(feast("great blue heron", "garlic naan"));
