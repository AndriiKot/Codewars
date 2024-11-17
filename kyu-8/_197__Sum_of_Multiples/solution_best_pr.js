function sumMul1(n, m, s = 0) {
  for (var i = n; i < m; i += n) s += i;
  return n >= m ? 'INVALID' : s;
}

function sumMul2(n, m) {
  if (m <= 0 || n <= 0) {
    return 'INVALID';
  }
  let res = 0;
  for (let i = 0; i < m; i += n) {
    res += i;
  }
  return res;
}

function sumMul3(n, m) {
  if (n >= m) return 'INVALID';

  var sum = 0;
  for (var i = n; i < m; i += n) {
    sum += i;
  }
  return sum;
}

// My solution
function sumMul(n, m) {
  let res = 0;
  if (n < m) {
    const step = n;
    while (n < m) {
      res += n;
      n += step;
    }
  }
  return res || 'INVALID';
}
