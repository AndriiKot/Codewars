function getNumberFromString1(s) {
  return +s.replace(/\D/g, "");
}

// My solution
getNumberFromString2 = (s) => {
  return Number(s.replace(/[^0-9]/g, ""));
};
