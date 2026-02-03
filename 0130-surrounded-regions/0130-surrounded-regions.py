from collections import deque

class Solution:
    def solve(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """

        unvisited = set()
        frontier = deque()
        for i in range(0,len(board)):
            for j in range(0,len(board[0])):
                if board[i][j] == "O":
                    if i == 0 or i == len(board)-1 or j == 0 or j == len(board[0])-1:
                        frontier.append((i,j))
                    
                    unvisited.add((i,j))

        while len(frontier) != 0:
            (x,y) = frontier.popleft()
            if (x,y) not in unvisited:
                continue
            unvisited.remove((x,y))
           
            if (x-1,y) in unvisited: frontier.append((x-1,y))
            if (x+1,y) in unvisited: frontier.append((x+1,y))
            if (x,y-1) in unvisited: frontier.append((x,y-1))
            if (x,y+1) in unvisited: frontier.append((x,y+1))

        for (x,y) in unvisited:
            board[x][y] = "X"

            


        