/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function(colors) {
    let alice = 0;
    let bob = 0;
    let prev2 = colors[0];
    let prev1 = colors[1]
    for (let i = 2; i<colors.length; i++) {
        
        if (prev1 == prev2 && prev2 == colors[i]) {
            if (prev1 == "A") alice++;
            else bob++;
        }
        prev2 = prev1;
        prev1 = colors[i];
    }
    return alice > bob;
    
};