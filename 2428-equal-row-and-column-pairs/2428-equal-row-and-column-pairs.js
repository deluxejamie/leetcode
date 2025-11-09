/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let pairs = 0;
    const x = new Map();
    for (let i=0;i<grid.length;i++) {
        const str = grid[i].join(',')
        x.set(str, (x.get(str) ?? 0) + 1);
    }
    for (let j=0;j<grid.length;j++) {
        const str = new Array(grid.length);
        for (let i=0;i<grid.length;i++) {
            str[i] = grid[i][j]
        }
        pairs += (x.get(str.join(',')) ?? 0)
    }
    return pairs;
    
};