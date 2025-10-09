function howManydays1(month) {
  var days = {
    1: 31,
    3: 31,
    5: 31,
    7: 31,
    8: 31,
    10: 31,
    12: 31,
    4: 30,
    6: 30,
    9: 30,
    11: 30,
    2: 28,
  };

  return days[month];
}

function howManydays2(month) {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    case 2:
      return 28;
  }
}
