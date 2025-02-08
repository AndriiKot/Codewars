const findOutlier = (integers) => {
  let odds = [];
  let evens = [];

  for (let i = 0; integers.length > 0; i++) {
    const int = () => integers[i]; // for optimization v8 and turbofun
    int() & 1 ? odds.push(int()) : evens.push(int());
    const len = (el) => el.length; // for optimization v8
    if ((len(odds) === 1 && len(evens) > 1) || (len(evens) === 1 && len(odds) > 1)) {
      break;
    }
  }
  return (odds.length === 1 && odds[0]) || evens[0];
};

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));
