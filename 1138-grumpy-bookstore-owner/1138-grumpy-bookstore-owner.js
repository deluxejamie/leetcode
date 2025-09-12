/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, minutes) {
    let bestGained = 0;
    let normalTotal = 0;
    for (let i=0;i<minutes;i++) {
        bestGained+=customers[i] * (grumpy[i]);
        normalTotal+=customers[i] * (1-grumpy[i]);
    }
    let workingGained = bestGained;

    for (let end=minutes;end<customers.length;end++) {
        workingGained+= (customers[end] * (grumpy[end])) - (customers[end-minutes] * (grumpy[end-minutes]));
        normalTotal += customers[end] * (1-grumpy[end]);
        if (workingGained > bestGained) {
            bestGained = workingGained;
        }
    }

    return normalTotal + bestGained;

    
};