/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const remaining = [];

    for (const asteroid of asteroids) {
        remaining.push(asteroid);
        // moving towards eachother
        while (remaining[remaining.length-1] < 0 && remaining[remaining.length-2] > 0) {
            const right = remaining.pop();
            const left = remaining.pop();
            if (left == -right) continue;
            else if (left > -right) remaining.push(left);
            else remaining.push(right)
        }
    }
    return remaining;
};