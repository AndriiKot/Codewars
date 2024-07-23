function drawStairs1(n) {
  let result = [];

  for (let i = 0; i < n; i++) {
    result[i] = `${" ".repeat(i)}I`;
  }

  return result.join("\n");
}

const drawStairs2 = (n) =>
  [...Array(n)].map((_, i) => " ".repeat(i) + "I").join("\n");


// My solution
function drawStairs(n) {
  let stairs = "";
  for (let i = 0; i < n; i++) {
    stairs += " ".repeat(i) + "I" + "\n";
  }
  return stairs.trim();
}
