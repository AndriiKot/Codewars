function gimme(triplet) {
  const sortTriplet = [...triplet].sort((a, b) => a - b);
  return triplet.indexOf(sortTriplet[1]);
}
