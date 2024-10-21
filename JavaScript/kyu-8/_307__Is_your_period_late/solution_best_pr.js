// Best praxe
{
  function periodIsLate(last, today, cycleLength) {
    return (today - last) / 86400000 > cycleLength;
  }
}

// My solution

function periodIsLate(last, today, cycleLength) {
  let result = false;
  if ((today.getTime() - last.getTime()) / (1000 * 3600 * 24) > cycleLength) {
    result = true;
  }
  return result;
}
