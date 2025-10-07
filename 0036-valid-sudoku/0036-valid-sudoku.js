/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const rows = new Array(9);
    const cols = new Array(9);
    const boxes = new Array(9);
    for (let i=0;i<9;i++) {
        cols[i] = new Set();
        rows[i] = new Set();
        boxes[i] = new Set();
    }
    for (let i=0;i<9;i++) {
        for (let j=0;j<9;j++) {
            const elem = board[i][j];
            if (elem == ".") continue;
            if (cols[i].has(elem)) return false;
            if (rows[j].has(elem)) return false;
            const boxPos = (3 * Math.floor(i/3)) + Math.floor(j/3);
            if (boxes[boxPos].has(elem)) return false;

            boxes[boxPos].add(elem);
            cols[i].add(elem);
            rows[j].add(elem);
        }
    }
    return true;
    
};