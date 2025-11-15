/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    // top down
    // for (let i=1;i<triangle.length;i++) {
    //     for (let j=0;j<triangle[i].length;j++) {
    //         const left = j == 0 ? Number.POSITIVE_INFINITY : triangle[i-1][j-1];
    //         const right = j == triangle[i].length-1 ? Number.POSITIVE_INFINITY : triangle[i-1][j];
    //         triangle[i][j]+= Math.min(right, left);
    //     }
    // }
    // return Math.min(...triangle[triangle.length-1]);

    // bottom up
    for (let i=triangle.length-2;i>=0;i--) {
        for (let j=0;j<=triangle.length;j++) {
            triangle[i][j] += Math.min(triangle[i+1][j],triangle[i+1][j+1]);
        }
    }

    return triangle[0][0];

    
};