class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        results = []
        
        def solver(used, i):
            if i == len(nums):
                results.append(used)
            else:
                left = used.copy()
                left.append(nums[i])
                solver(left,i+1)
                
                other_i = i+1
                while other_i < len(nums) and nums[other_i] == nums[i]:
                    other_i+=1
                solver(used,other_i)
        solver([],0)
        return results



        