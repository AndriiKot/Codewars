const cannonsReady = (gunners) => {
  let status = "Fire!";
  for (person in gunners) {
    if (gunners[person] == "nay") return (status = "Shiver me timbers!");
  }
  return status;
};
