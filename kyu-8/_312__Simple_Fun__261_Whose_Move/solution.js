function whoseMove(lastPlayer, win) {
  let result = "black";
  if (lastPlayer === "black" && win === false) result = "white";
  if (lastPlayer === "white" && win === true) result = "white";
  return result;
}

// For lastPlayer = "black" and win = false, the output should be "white".

// For lastPlayer = "white" and win = true, the output should be "white".

// testing
console.log(whoseMove("black", false)); // white
console.log(whoseMove("white", true)); // white
console.log(whoseMove("black", true)); // black
console.log(whoseMove("white", false)); // black
