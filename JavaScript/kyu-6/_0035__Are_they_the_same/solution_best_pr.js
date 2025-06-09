function comp(array1, array2) {
  let result = true;

  if (!array1 || !array2 || array1.length !== array2.length) {
    result = false;
  } else {
    array1.sort((a, b) => a - b);
    array2.sort((a, b) => a - b);

    for (let i = 0; i < array1.length; i++) {
      if (array1[i] ** 2 !== array2[i]) {
        result = false;
        break;
      }
    }
  }

  return result;
}
