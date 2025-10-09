function twiceAsOld(dadYearsOld, sonYearsOld) {
  let difference = dadYearsOld - sonYearsOld * 2;
  difference = Math.abs(difference);
  return difference;
}

console.log(twiceAsOld(36, 7));
