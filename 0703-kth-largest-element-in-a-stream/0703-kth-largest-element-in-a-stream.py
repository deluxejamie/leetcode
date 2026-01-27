import heapq
class KthLargest:

    def __init__(self, k: int, nums: List[int]):
        # a min heap, we will keep only the k largest elements
        heapq.heapify(nums)
        self.h = nums
        self.k = k

        while (len(self.h) > k):
            heapq.heappop(self.h)

    def add(self, val: int) -> int:
        if (len(self.h) < self.k or val >= self.h[0]):
            heapq.heappush(self.h,val)
            if (len(self.h) > self.k):
                heapq.heappop(self.h)
        
        return self.h[0]
        

# Your KthLargest object will be instantiated and called as such:
# obj = KthLargest(k, nums)
# param_1 = obj.add(val)