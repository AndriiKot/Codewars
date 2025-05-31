function deleteNth(order, maxE) {
  const countOrder = {};
  return order.filter((num) => {
    countOrder[num] = (countOrder[num] || 0) + 1;
    return countOrder[num] <= maxE;
  });
}
