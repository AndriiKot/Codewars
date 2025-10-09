function printerError1(s) {
  return `${(s.match(/[^a-m]/gi) || []).length}/${s.length}`;
}

function printerError2(s) {
  return `${s.replace(/[a-m]/gi, '').length}/${s.length}`;
}
