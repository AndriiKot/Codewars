const well1 = (x) => {
  const good_count = x.filter((x) => x == "good").length;
  return good_count < 1
    ? "Fail!"
    : good_count < 3
    ? "Publish!"
    : "I smell a series!";
};

function well2(x) {
  const count = x.reduce((s, v) => s + (v == "good"), 0);
  return count ? (count > 2 ? "I smell a series!" : "Publish!") : "Fail!";
}

function well3(x) {
  switch (x.filter((i) => i === "good").length) {
    case 0:
      return "Fail!";
    case 1:
    case 2:
      return "Publish!";
    default:
      return "I smell a series!";
  }
}
