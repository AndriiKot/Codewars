function validBraces(braces) {
  var matches = { '(': ')', '{': '}', '[': ']' };
  var stack = [];
  var currentChar;

  for (var i = 0; i < braces.length; i++) {
    currentChar = braces[i];

    if (matches[currentChar]) {
      // opening braces
      stack.push(currentChar);
    } else {
      // closing braces
      if (currentChar !== matches[stack.pop()]) {
        return false;
      }
    }
  }

  return stack.length === 0; // any unclosed braces left?
}

{
  function validBraces(braces) {
    while (/\(\)|\[\]|\{\}/g.test(braces)) {
      braces = braces.replace(/\(\)|\[\]|\{\}/g, '');
    }
    return !braces.length;
  }
}
