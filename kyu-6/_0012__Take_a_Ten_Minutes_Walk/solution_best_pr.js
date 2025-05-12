function isValidWalk(walk) {
  var res = { n: 0, w: 0, s: 0, e: 0 };
  walk.forEach((c) => res[c]++);
  return walk.length === 10 && res.n == res.s && res.e == res.w;
}

// or

{
  function isValidWalk(walk) {
    let res = false;
    const directions = {
      n: 0,
      s: 0,
      w: 0,
      e: 0,
    };
    if (walk.length <= 10 && walk.length > 2) {
      walk.forEach((dir) => directions[dir]++);
      const { n, s, w, e } = directions;
      if (n - s === 0 && w - e === 0) res = true;
    }
    return res;
  }
}
