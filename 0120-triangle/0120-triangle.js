/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    for (let i=1;i<triangle.length;i++) {
        for (let j=0;j<triangle[i].length;j++) {
            const left = j == 0 ? Number.POSITIVE_INFINITY : triangle[i-1][j-1];
            const right = j == triangle[i].length-1 ? Number.POSITIVE_INFINITY : triangle[i-1][j];
            triangle[i][j]+= Math.min(right, left);
        }
    }

    return Math.min(...triangle[triangle.length-1]);
    
};