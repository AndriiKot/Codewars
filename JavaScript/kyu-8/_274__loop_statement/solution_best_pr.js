function padIt(str, n) {
  while (n > 0) {
    if (n % 2 === 0) {
      str = str + "*";
    } else {
      str = "*" + str;
    }
    n--;
  }
  return str;
}

// My solution

function padIt1(str, n) {
  let startSting = "";
  let endString = "";

  while (n > 0) {
    if (n & 1) {
      startSting += "*";
    } else {
      endString += "*";
    }
    n--;
  }
  return `${startSting}${str}${endString}`;
}
