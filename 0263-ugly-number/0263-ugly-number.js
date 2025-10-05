/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if (n == 0) return false;
    let num = n;
    while (num % 2 == 0) num/=2;
    while (num % 3 == 0) num/=3;
    while (num % 5 == 0) num/=5;
    return num == 1;
    
};