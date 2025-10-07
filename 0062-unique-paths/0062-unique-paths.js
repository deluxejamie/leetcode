/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    
    const grid = new Array(m);
    for (let i=0;i<m;i++) {
        grid[i] = new Array(n);
    }
    const uniquePathsFromPos = (x,y) => {

        if (x == (m-1)) return 1;
        if (y == (n-1)) return 1;

        if (grid[x][y] != undefined) return grid[x][y];

        const pathsA = uniquePathsFromPos(x,y+1);
        const pathsB = uniquePathsFromPos(x+1,y);

        const res = pathsA+pathsB;
        grid[x][y] = res;
        return res;
    }
    return uniquePathsFromPos(0,0)
    
};