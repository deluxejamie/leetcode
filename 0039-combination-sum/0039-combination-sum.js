/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates.sort((a,b) => a-b)
    const prelims = [];
    const solver = (currentChoices,remainingTarget, pos) => {
        if (remainingTarget == 0) {
            prelims.push(currentChoices)
        } else if (remainingTarget < candidates[0]) return;
        for (let i=pos; i <candidates.length;i++) {
            const choice = candidates[i]
            if (remainingTarget - choice >= 0) solver([...currentChoices,choice], remainingTarget-choice,i);
        }
    }
    solver([],target,0);
    return prelims
};