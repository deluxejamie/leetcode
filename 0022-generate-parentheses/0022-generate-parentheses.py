class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        
        results = []
        def solver(current, o):
            if len(current) == n*2:
                results.append("".join(current))
            else:
                if o > 0:
                    current.append(")")
                    solver(current,o-1)
                    current.pop()
                if (n*2 - len(current)) != o:
                    current.append("(")
                    solver(current,o+1)
                    current.pop()
        
        solver([],0)

        return results
                

