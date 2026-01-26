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
    hand.sort((a,b) => a-b);
    for (let i=0;i<hand.length;i++) {
        if (occs.get(hand[i]) == 0) continue;
        const lowestCard = hand[i];
        for (let j=0;j<groupSize;j++) {
            const targetCard = lowestCard + j;
            const needed = occs.get(targetCard) ?? 0;
            if (needed < 1) return false;
            occs.set(targetCard,needed-1);
        }
    }
    
    return true;
};