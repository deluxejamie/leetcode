/**
 * @param {string} digits
 * @return {string[]}
 */

const chars = {
    "2":["a","b","c"],
    "3":["d","e","f"],
    "4":["g","h","i"],
    "5":["j","k","l"],
    "6":["m","n","o"],
    "7":["p","q","r","s"],
    "8":["t","u","v"],
    "9":["w","x","y","z"]
}

var letterCombinations = function(digits) {
    if (digits.length == 0) return []
    const solutions = [];

    const solver = (currentString, position) => {
        if (position == digits.length) return solutions.push(currentString);
        for (const char of chars[digits[position]]) solver(currentString+char,position+1)
    }

    solver("",0)
    return solutions
    
};