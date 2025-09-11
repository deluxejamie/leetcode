/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const chars = {"(":")","{":"}","[":"]"};
    const openingChars = Object.keys(chars);
    const closingChars = Object.values(chars);

    for (let i=0;i<s.length;i++) {
        if (openingChars.includes(s[i])) {
            stack.push(chars[s[i]])
        } else if (closingChars.includes(s[i])) {
            if (stack.length > 0 && stack[stack.length-1] == s[i]) stack.pop();
            else return false;
        } else {
            return false;
        }
    }

    return stack.length == 0;
};