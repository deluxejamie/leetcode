class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        # this forms a linked list with a cycle

        # hare and tortoise
        slow = 0
        fast = 0
        while True:
            
            fast = nums[nums[fast]]
            slow = nums[slow]
            if fast == slow:
                break
        
        slow = 0
        while fast != slow:
            fast = nums[fast]
            slow = nums[slow]
        return slow
