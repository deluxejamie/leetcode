/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var maxBottlesDrunk = function(numBottles, numExchange) {
    let total = numBottles;
    let empty = numBottles;
    while (Math.floor(empty/numExchange) >= 1) {
        total+=1;
        empty+=1-numExchange
        numExchange++
    }
    return total;

};