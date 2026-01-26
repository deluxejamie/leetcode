/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
    if ((hand.length % groupSize) != 0 ) return false;
    const occs = new Map();
    for (let i=0;i<hand.length;i++) {
        occs.set(hand[i], (occs.get(hand[i]) ?? 0)+1); 
    }
    const cards = [...occs.keys()].sort((a,b) => b-a);
    while (cards.length != 0 ) {
        const lowestCard = cards[cards.length-1];
        for (let j=0;j<groupSize;j++) {
            const targetCard = lowestCard + j;
            const needed = occs.get(targetCard) ?? 0;
            if (needed < 1) return false;
            occs.set(targetCard,needed-1);
            if (needed == 1) cards.splice(cards.indexOf(needed),1);
        }
        
    }
    return true;
};