/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const outcomes = new Array(numRows);
    outcomes[0] = [1];
    for (let i=1;i<numRows;i++) {
        outcomes[i] = new Array(i);
        for (let j=0;j<=i;j++) {
            const aboveLeft = j > 0 ?  outcomes[i-1][j-1] : 0;
            const aboveRight = j < i ? outcomes[i-1][j] : 0;
            outcomes[i][j] = aboveLeft + aboveRight;
        }
    }
    return outcomes;
    
};