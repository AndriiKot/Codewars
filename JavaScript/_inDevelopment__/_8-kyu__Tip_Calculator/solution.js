function calculateTip(amount, rating) {
  rating = rating.toLowerCase();
  // const onePercent = amount ? amount / 100.0 : +0;
  if (typeof amount === 'number' && !isNaN(amount)) {
    const tips = {
      terrible: 0,
      poor: amount * 0.05,
      good: amount * 0.1,
      great: amount * 0.15,
      excellent: amount * 0.2,
    };
    return tips[rating] ? Math.ceil(tips[rating]) : 0;
  } else {
    return 'Rating not recognised';
  }
}

console.log(calculateTip(0, 'poor'));
