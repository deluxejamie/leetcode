/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const results = [];

    const solver = (choices,position) => {
        if (choices.length == k) results.push(choices);
        
        for (let i=position; k - (choices.length) <= (n + 1 - i) && i <= n;i++) {
            solver([...choices,i],i+1)
        }
    }

    solver([],1);

    return results;
};