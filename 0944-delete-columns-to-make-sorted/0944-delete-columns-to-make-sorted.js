/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let deleted = 0;
    for (let i=0;i<strs?.[0].length || 0;i++) {
        for (let j=1;j<strs.length;j++) {
            if (strs[j][i].localeCompare(strs[j-1][i]) < 0) {
                deleted++;
                break;
            }
        }
    }
    return deleted;
};