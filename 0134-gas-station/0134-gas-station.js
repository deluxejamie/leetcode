/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {

    let valueOfCircuit = 0;
    for (let i=0;i<gas.length;i++) {
        valueOfCircuit+=gas[i] - cost[i];
    }
    if (valueOfCircuit < 0) return -1;

    // a solution must somehow exist
    
    // if we reach a point where the first n have a negative sum then the rest must have a positive sum.

    let startPos = 0;
    let value = 0;

    for (let i=0;i<gas.length;i++) {
        value += gas[i] - cost[i];
        if (value < 0) {
            value = 0;
            startPos = i+1;
        }
    }
    
    return startPos;
};