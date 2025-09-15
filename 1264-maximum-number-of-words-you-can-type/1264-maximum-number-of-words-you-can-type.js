/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    const words = text.split(" ");
    const letters = new Map();
    for (const l of brokenLetters) letters.set(l,true);

    return words.reduce((prev,val) => {
        let next = prev+1;
        for (let i=0;i<val.length;i++) {
            if (letters.has(val[i])) {
                next = prev;
                break;
            }
        }
        return next;    
    },0)
};