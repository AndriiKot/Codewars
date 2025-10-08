function inArray(arr1, arr2) {
  arr1.sort();
  let str = arr2.join();
  const res = arr1.reduce((acc, cur) => {
    if (str.includes(cur)) acc.push(cur);
    return acc;
  }, []);
  return res;
}
