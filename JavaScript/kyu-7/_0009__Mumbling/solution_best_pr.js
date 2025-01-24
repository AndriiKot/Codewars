function accum(s) {
  const arrLetters = s.split('');

  const result = arrLetters.map((el, i) => {
    const arr = Array.from({ length: i + 1 }, () => el.toLowerCase());
    arr[0] = arr[0].toUpperCase();
    return arr.join('');
  });
  return result.join('-');
}

/*

function accum(s) {
	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}

*/
