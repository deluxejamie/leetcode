/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    const words = text.split(" ");
    const letters = new Map();
    for (const l of brokenLetters) letters.set(l,true);

    return words.reduce((prev,val) => [...val].some(l => letters.has(l)) ? prev : prev+1,0)
    
};