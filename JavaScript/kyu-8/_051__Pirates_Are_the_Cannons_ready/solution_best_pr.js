const cannonsReady = (gunners) => {
  for (var i in gunners) {
    if (gunners[i] == "nay") {
      return "Shiver me timbers!";
    }
  }
  return "Fire!";
};
