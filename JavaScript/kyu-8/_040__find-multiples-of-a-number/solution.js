function findMultiples(integer, limit) {
  return Array.from({ length: limit / integer }, (_, i) => (i + 1) * integer);
}
