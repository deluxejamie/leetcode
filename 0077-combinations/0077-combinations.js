/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const results = [];

    const solver = (choices,position) => {
        if (choices.length == k) results.push([...choices]);
        
        for (let i=position; k - (choices.length) <= (n + 1 - i) && i <= n;i++) {
            choices.push(i);
            solver(choices,i+1);
            choices.pop(i);
            }
    }

    solver([],1);

    return results;
};