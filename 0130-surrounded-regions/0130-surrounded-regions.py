from collections import deque

class Solution:
    def solve(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """

        nonouters = set()
        outers = set()
        for i in range(0,len(board)):
            for j in range(0,len(board[0])):
                if board[i][j] == "O":
                    if i == 0 or i == len(board)-1 or j == 0 or j == len(board[0])-1:
                        outers.add((i,j))
                    else:
                        nonouters.add((i,j))

        while len(outers) != 0:
            frontier = deque([next(iter(outers))])
        
            while len(frontier) != 0:
                (x,y) = frontier.popleft()
                if (x,y) in nonouters:
                    nonouters.remove((x,y))
                elif (x,y) in outers:
                    outers.remove((x,y))
                else:
                    continue
                
                if (x-1,y) in nonouters: frontier.append((x-1,y))
                if (x+1,y) in nonouters: frontier.append((x+1,y))
                if (x,y-1) in nonouters: frontier.append((x,y-1))
                if (x,y+1) in nonouters: frontier.append((x,y+1))

        for (x,y) in nonouters:
            board[x][y] = "X"

            


        