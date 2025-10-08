function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  const blue = blueStart - bluePulled;
  const red = redStart - redPulled;

  return blue / (blue + red);
}
