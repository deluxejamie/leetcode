/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const remaining = [];

    for (const asteroid of asteroids) {
        remaining.push(asteroid);
        // moving towards eachother
        while (remaining.length > 1 && remaining[remaining.length-1] < 0 && remaining[remaining.length-2] > 0) {
            const a = remaining.pop();
            const absA = Math.abs(a);
            const b = remaining.pop();
            const absB = Math.abs(b);
            if (absA == absB) continue;
            else if (absA > absB) remaining.push(a);
            else remaining.push(b)
        }
    }
    return remaining;
};