class Solution:
    def hIndex(self, citations: List[int]) -> int:

        citations.sort()
        current = 0
        for i in range(len(citations)):
            if len(citations) - i >= citations[i]:
                current = citations[i]
            else:
                return max(current, len(citations) - i) 
        return current
            

        