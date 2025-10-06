/**
 * @param {number} n
 * @return {number}
 */

const map = new Map([[0,0],[1,1]]);

var fib = function(n) {
    if (map.has(n)) return map.get(n);

    const result = fib(n-1) + fib(n-2);
    map.set(n,result);
    return result;
};