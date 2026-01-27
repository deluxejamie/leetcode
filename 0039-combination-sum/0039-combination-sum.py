class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        
        results = []
        def solver(curr_sum, used, i):
            if curr_sum == target:
                results.append(used.copy())
                return
            elif curr_sum > target or i == len(candidates):
                return
            else:
                used.append(candidates[i])
                solver(curr_sum + candidates[i], used, i)
                used.pop()
                solver(curr_sum, used, i+1)

        solver(0,[],0)
        return results
            
