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

            for (const [trX,trY] of [[0,1],[1,0],[0,-1],[-1,0]]) {
                const newX = x+trX;
                const newY = y+trY;
                if (newX < 0 || newX >= board.length) continue;
                if (newY < 0 || newY >= board[0].length) continue;
                if (solver(newX,newY,i+1)) return true;
            }
            board[x][y] = prev
            
        }
        return false;
    }

    for (let x=0;x<board.length;x++) {
        for (let y=0;y<board[x].length;y++) {
            if (solver(x,y,0)) return true;
        }
    }
    return false;
};