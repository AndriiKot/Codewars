function yearDays1(year) {
  return (
    year +
    " has " +
    ((!(year % 100) && year % 400) || year % 4 ? "365" : "366") +
    " days"
  );
}

function yearDays2(year) {
  let nDays = year % 4 ? 365 : year % 100 ? 366 : year % 400 ? 365 : 366;

  return `${year} has ${nDays} days`;
}
