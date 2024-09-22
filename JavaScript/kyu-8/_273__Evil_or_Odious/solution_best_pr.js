evil = (n) =>
  ["It's Evil!", "It's Odious!"][(n.toString(2).split("1").length - 1) & 1];

// My solution
function evilMy(n) {
  const binaryArray = n.toString(2).split("");
  const sum = binaryArray.reduce((a, b) => a + Number(b), 0);
  return sum & 1 ? "It's Odious!" : "It's Evil!";
}
