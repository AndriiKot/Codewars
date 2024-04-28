function feast1(beast, dish) {
  return (
    beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
  );
}

function feast2(beast, dish) {
  return dish.startsWith(beast[0]) && dish.endsWith(beast[beast.length - 1]);
}
