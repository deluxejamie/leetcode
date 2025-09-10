/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const results = [];
    const solver = (choices, target, pos) => {
        if (target == 0) return results.push(choices);

        for (let i=pos;i<candidates.length;i++) {
            const choice = candidates[i];
            if (target - choice >= 0) solver([...choices,choice], target - choice, i);
        }
    }
    solver([],target,0);
    return results;
};