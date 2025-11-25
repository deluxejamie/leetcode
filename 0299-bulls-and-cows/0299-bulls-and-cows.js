/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    const occs = new Array(10).fill(0);
    for (let i=0;i<secret.length;i++) {
        occs[secret[i]]++;
    }
    let bulls = 0;
    for (let i=0;i<guess.length;i++) {
        if (secret[i] == guess[i]) {
            bulls++;
            occs[secret[i]]--;
        }
    }
    let cows = 0;
    for (let i=0;i<guess.length;i++) {
        if ((secret[i] != guess[i]) && occs[guess[i]] > 0) {
            occs[guess[i]]--;
            cows++;
        }
    }
    return `${bulls}A${cows}B`;
};