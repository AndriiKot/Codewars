function sorter(arr) {
  return arr.sort((a, b) => (a.toLowerCase() > b.toLowerCase() ? 1 : -1));
}

module.exports = sorter;
