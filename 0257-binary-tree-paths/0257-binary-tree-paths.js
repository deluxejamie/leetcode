/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const results = [];

    const solver = (str,node) => {
        
        const thisStr = str == "" ? node.val.toString() : (str + "->" + node.val);
        if (!node.left && !node.right) return results.push(thisStr);
        if (node.left) solver(thisStr,node.left);
        if (node.right) solver(thisStr,node.right);
    }
    solver("",root);
    return results;
    
};