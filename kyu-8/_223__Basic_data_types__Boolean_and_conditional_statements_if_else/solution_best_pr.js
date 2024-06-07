function trueOrFalse(val) {
  return val ? "true" : "false";
}

// Best Practice
function trueOrFalse(val) {
  return Boolean(val).toString();
}
