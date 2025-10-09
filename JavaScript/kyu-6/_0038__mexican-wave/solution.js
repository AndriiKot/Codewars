const wave = (s) => {
  return [...s].flatMap((c, i) => (c === ' ' ? [] : [s.slice(0, i) + c.toUpperCase() + s.slice(i + 1)]));
};
