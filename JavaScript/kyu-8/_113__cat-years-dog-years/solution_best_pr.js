const humanYearsCatYearsDogYears1 = (humanYears) => [humanYears, (humanYears - 1 ? 16 : 11) + 4 * humanYears, (humanYears - 1 ? 14 : 10) + 5 * humanYears];

var humanYearsCatYearsDogYears = function (humanYears) {
  const humYears = humanYears;
  let dogYears = 0;
  let catYears = 0;
  while (humanYears > 0) {
    humanYears == 1 ? ((catYears += 15), (dogYears += 15)) : humanYears == 2 ? ((catYears += 9), (dogYears += 9)) : ((catYears += 4), (dogYears += 5));
    humanYears -= 1;
  }
  return [humYears, catYears, dogYears];
};
