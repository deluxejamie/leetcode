class Solution(object):
    def numIslands(self, grid):
        """
        :type grid: List[List[str]]
        :rtype: int
        """
        unvisited = set()
        for i in range(0,len(grid)):
            for j in range(0,len(grid[0])):
                # add all land places to the unvisited set
                if grid[i][j] == "1":
                    unvisited.add((i,j))
        
        frontier = []
        islands = 0
        while len(unvisited) != 0:
            frontier.append(unvisited.pop())
            islands+=1
            while len(frontier) !=0:
                # we are searching this one
                (x,y) = frontier.pop()
                unvisited.discard((x,y))
                if x+1 < len(grid) and (x+1,y) in unvisited: frontier.append((x+1,y))
                if x-1 >= 0 and (x-1,y) in unvisited: frontier.append((x-1,y))
                if y+1 < len(grid[0]) and (x,y+1) in unvisited: frontier.append((x,y+1))
                if y-1 >= 0 and (x,y-1) in unvisited: frontier.append((x,y-1))
        return islands


