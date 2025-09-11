/**
 * @param {number} x
 * @return {number}
 */

const MIN = - (2 ** 31) 
const MAX = (2 ** 31) - 1;
var reverse = function(x) {
 let result = "";
    const isNegative = x<0 ? -1 : 1;
    const stringifiedRes = Math.abs(x).toString();
    for (let i=stringifiedRes.length-1;i>=0;i--) {
        result+=stringifiedRes[i];
    }
    result = parseInt(result);
    return (result < MIN || result > MAX) ? 0 : 
    result * isNegative;

};