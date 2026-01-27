class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        results = []
        def solver(chosen, i):
            if i == len(nums):
                results.append(chosen)
                return
            else:
                right = chosen.copy()
                chosen.append(nums[i])
                solver(chosen, i+1)
                solver(right, i+1)
        solver([],0)
        return results
            
