/**
 * @param {number} x
 * @return {number}
 */

const MIN = - (2 ** 31) 
const MAX = (2 ** 31) - 1;
var reverse = function(x) {
    const xStr = x.toString();
    let result = "";
    let end = 0;
    if (xStr?.[0] == "-") {
        result+="-";
        end++;
    }
    for (let i=xStr.length-1;i>=end;i--) result+=xStr[i];
    result = parseInt(result);
    if (result >MAX || result < MIN) return 0;
    return result

};