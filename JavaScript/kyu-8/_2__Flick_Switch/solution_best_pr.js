function flickSwitch(arr) {
  let returning = true;
  return arr.map((v) => {
    return v === "flick" ? (returning = !returning) : returning;
  });
}

const testArray = ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ;
console.log(flickSwitch(testArray));