function cubeChecker(volume, side) {
  if (volume <= 0 || side <= 0) return false;
  return volume === Math.pow(side, 3) ? true : false;
}
