// Best Practices
{
  function whoseMove(lastPlayer, win) {
    return win ? lastPlayer : lastPlayer == 'white' ? 'black' : 'white';
  }
}

// My Solution
function whoseMove(lastPlayer, win) {
  let result = 'black';
  if (lastPlayer === 'black' && win === false) result = 'white';
  if (lastPlayer === 'white' && win === true) result = 'white';
  return result;
}
