/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const outcomes = new Array(obstacleGrid.length);

    for (let i=0;i<outcomes.length;i++) outcomes[i] = new Array(obstacleGrid[i].length);
    
    outcomes[0][0] = 1;
    for (let i=0;i<outcomes.length;i++) {
        for (let j=0;j<outcomes[i].length;j++) {
            if (i == 0 && j == 0 && obstacleGrid[i][j] == 0) {
                outcomes[i][j] = 1;
            } else if (obstacleGrid[i][j] == 1) {
                outcomes[i][j] = 0;
            } else {
                const above = i == 0 ? 0 : outcomes[i-1][j];
                const left = j == 0 ? 0 : outcomes[i][j-1];
                outcomes[i][j] = above+left;
            }
        }
    }
    return outcomes[outcomes.length-1][outcomes[0].length-1];

};