/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let remaining = numBottles;
    let total = 0;
    let emptyBottles = 0;
    do {
        total+=remaining;
        emptyBottles+=remaining;

        remaining = Math.floor(emptyBottles/numExchange);
        emptyBottles-=remaining*numExchange;

    } while (remaining != 0)
    return total;
    
};