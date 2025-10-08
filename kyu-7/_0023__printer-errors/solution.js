function printerError(s) {
  return `${(s.match(/[^a-m]/gi) || []).length}/${s.length}`;
}
