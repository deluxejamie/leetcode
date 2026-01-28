class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        results = []
        def solver(used,remaining):
            if len(remaining) == 0: results.append(used.copy())
            for i in range(0,len(remaining)):
                r = remaining[i]
                used.append(r)
                remaining.pop(i)
                solver(used,remaining)
                used.pop()
                remaining.insert(i,r)
        
        solver([],nums)
        return results
