const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function whatday(num) {
  return weekdays[num - 1] || 'Wrong, please enter a number between 1 and 7';
}
