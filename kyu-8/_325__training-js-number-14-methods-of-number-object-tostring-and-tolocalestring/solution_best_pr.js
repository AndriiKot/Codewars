const hex = (num) => num.toString(16).padStart(2, '0');

const colorOf = (r, g, b) => {
  return `#${hex(r)}${hex(g)}${hex(b)}`;
};
