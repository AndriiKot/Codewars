function yearDays(year) {
  let days = 365;
  if (year % 400 == 0) {
    days = 366;
  } else if (year % 100 == 0) {
    days = 365;
  } else if (year % 4 == 0) {
    days = 366;
  }
  return `${year} has ${days} days`;
}
