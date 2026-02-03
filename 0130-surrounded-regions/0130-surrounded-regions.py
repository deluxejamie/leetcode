from collections import deque

class Solution:
    def solve(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """

        os = set()
        for i in range(0,len(board)):
            for j in range(0,len(board[0])):
                if board[i][j] == "O":
                    os.add((i,j))

        while len(os) != 0:
            reached = []
            frontier = deque([next(iter(os))])
            edge_found = False

            while len(frontier) != 0:
                (x,y) = frontier.popleft()
                if (x,y) not in os:
                    continue
                os.remove((x,y))
                reached.append((x,y))
                if x == 0 or x == len(board)-1 or y == 0 or y == len(board[0])-1:
                    edge_found = True
                
                if (x-1,y) in os: frontier.append((x-1,y))
                if (x+1,y) in os: frontier.append((x+1,y))
                if (x,y-1) in os: frontier.append((x,y-1))
                if (x,y+1) in os: frontier.append((x,y+1))
                
            if not edge_found:
                for (x,y) in reached:
                    board[x][y] = "X"
            

            


        