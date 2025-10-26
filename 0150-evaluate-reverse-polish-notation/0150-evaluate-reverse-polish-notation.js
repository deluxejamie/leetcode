/**
 * @param {string[]} tokens
 * @return {number}
 */

const ops = {
    "+": (a,b) => a+b,
    "-": (a,b) => a-b,
    "*": (a,b) => a*b,
    "/": (a,b) => Math.trunc(a/b)
    }

var evalRPN = function(tokens) {
    const stack = [];
    for (let i=0;i<tokens.length;i++) {
        if (tokens[i] in ops) {
            const b = stack.pop();
            const a = stack.pop();
            stack.push((ops[tokens[i]])(a,b));
        } else {
            stack.push(parseInt(tokens[i]));
        }
    }
    return stack[0];
};