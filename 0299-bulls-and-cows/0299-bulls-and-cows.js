/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    const occs = new Map();
    for (let i=0;i<secret.length;i++) {
        occs.set(secret[i], (occs.get(secret[i]) ?? 0) + 1);
    }
    let bulls = 0;
    for (let i=0;i<guess.length;i++) {
        if (secret[i] == guess[i]) {
            bulls++;
            occs.set(secret[i], (occs.get(secret[i]) -1));
        }
    }
    let cows = 0;
    for (let i=0;i<guess.length;i++) {
        if ((secret[i] != guess[i]) && (occs.get(guess[i]) ?? 0) > 0) {
            occs.set(guess[i], (occs.get(guess[i]) -1));
            cows++;
        }
    }
    return `${bulls}A${cows}B`;
};