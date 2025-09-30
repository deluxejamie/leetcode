/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function(colors) {
    let alice = 0;
    let bob = 0;
    for (let i = 1; i<colors.length-1; i++) {
        if (colors[i] == colors[i-1] && colors[i] == colors[i+1]) {
            if (colors[i] == "A") alice++;
            else bob++;
        }
    }
    return alice > bob;
    
};