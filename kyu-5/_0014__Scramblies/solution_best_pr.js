function scramble(str1, str2) {
  let occurences = str1.split('').reduce((arr, cur) => {
    arr[cur] ? arr[cur]++ : (arr[cur] = 1);
    return arr;
  }, {});
  return str2.split('').every((character) => --occurences[character] >= 0);
}
