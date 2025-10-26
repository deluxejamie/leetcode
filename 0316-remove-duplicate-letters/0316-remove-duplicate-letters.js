/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    const occurences = new Map(); // remaining occurences including any in stack
    for (let i=0;i<s.length;i++) {
        occurences.set(s[i], (occurences.get(s[i]) ?? 0) + 1); 
    }
    const stack = [];
    const used = new Set();
    for (let i=0;i<s.length;i++) {
        if (!used.has(s[i])) {
            while (
                stack.length > 0 &&
                occurences.get(stack[stack.length-1]) > 1 &&
                stack[stack.length-1].localeCompare(s[i]) >= 0
            ) {

                const top = stack.pop();
                occurences.set(top, occurences.get(top)-1);
                used.delete(top);
            }
            stack.push(s[i]);
            used.add(s[i])
        } else {
            occurences.set(s[i],occurences.get(s[i])-1);
        }
    }
    return stack.join('')

    
};