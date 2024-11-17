function defineSuit(card) {
  cards = {
    '♣': 'clubs',
    '♦': 'diamonds',
    '♥': 'hearts',
    '♠': 'spades',
  };

  return cards[card.at(-1)];
}
