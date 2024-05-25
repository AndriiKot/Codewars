function updateLight(current) {
  const nextStep = {
    green: "yellow",
    yellow: "red",
    red: "green",
  };
  return nextStep[current];
}
