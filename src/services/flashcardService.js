export function getCardStats(cards, progress) {
    const known = cards.filter(card => progress[card.id] === 'known').length
    const learning = cards.filter(card => progress[card.id] === 'learning').length
    return { total: cards.length, known, learning, unseen: cards.length - known - learning }
  }