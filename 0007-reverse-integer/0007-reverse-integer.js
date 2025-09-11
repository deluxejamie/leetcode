/**
 * @param {number} x
 * @return {number}
 */

const MIN = - (2 ** 31) 
const MAX = (2 ** 31) - 1;
var reverse = function(x) {
    const isNegative = x<0 ? -1 : 1;
    const result = parseInt(Math.abs(x).toString().split("").reverse().join(""))
    return (result < MIN || result > MAX) ? 0 : 
    result * isNegative;

};