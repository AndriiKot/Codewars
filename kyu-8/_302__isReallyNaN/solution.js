const isReallyNaN = (val) => {
  let result = false;
  if (typeof val === 'number' && isNaN(val)) {
    result = true;
  }
  return result;
};
