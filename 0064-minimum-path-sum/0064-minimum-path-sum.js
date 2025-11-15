/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    for (let i=0;i<grid.length;i++) {
        for (let j=0;j<grid[i].length;j++) {
            if (i==0 && j == 0) continue;
            const costLeft = i == 0 ? Number.POSITIVE_INFINITY : grid[i-1][j];
            const costAbove = j == 0 ? Number.POSITIVE_INFINITY : grid[i][j-1];
            grid[i][j] += Math.min(costLeft,costAbove);
        }
    }
    return grid[grid.length-1][grid[0].length-1];
};