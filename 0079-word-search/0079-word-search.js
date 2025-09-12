/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const solver = (x, y, i) => {
        if (board[x][y] == word[i]) {
            if (i+1 == word.length) return true;
            const prev = board[x][y];
            board[x][y] = "";

            if (
                (x+1 < board.length && solver(x+1,y,i+1)) ||
                (x-1 >= 0 && solver(x-1,y,i+1)) || 
                (y+1 < board[0].length && solver(x,y+1,i+1)) ||
                (y-1 >= 0 && solver(x,y-1,i+1))
                ) return true; 
            board[x][y] = prev
        } else return false;
    }

    for (let x=0;x<board.length;x++) {
        for (let y=0;y<board[x].length;y++) {
            if (solver(x,y,0)) return true;
        }
    }
    return false;
};