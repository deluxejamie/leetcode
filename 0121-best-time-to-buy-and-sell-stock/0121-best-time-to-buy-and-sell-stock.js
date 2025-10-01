/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = Number.NEGATIVE_INFINITY;
    let minPrice = Number.POSITIVE_INFINITY
    for (let i=0; i<prices.length; i++) {
        minPrice = Math.min(minPrice,prices[i]);
        profit = Math.max(profit,(prices[i] - minPrice));       
    }
    return profit;
    
};