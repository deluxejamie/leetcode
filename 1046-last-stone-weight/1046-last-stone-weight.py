import heapq
class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        heapq.heapify_max(stones)
        while len(stones) > 1:
            x_1 = heapq.heappop_max(stones)
            x_2 = heapq.heappop_max(stones)
            if (x_1 == x_2): continue
            
            heapq.heappush_max(stones,x_1 - x_2)

        return 0 if len(stones) == 0 else stones[0]
