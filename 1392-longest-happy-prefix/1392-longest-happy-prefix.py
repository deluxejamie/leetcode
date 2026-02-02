class Solution:
    def longestPrefix(self, s: str) -> str:
        lps = [0] * len(s)
        prevLPS = 0
        i = 1
        while i < len(s):
            if s[i] == s[prevLPS]:
                lps[i] = prevLPS+1
                prevLPS+=1
                i+=1
            elif prevLPS == 0:
                lps[i] = 0
                i+=1
            else:
                prevLPS = lps[prevLPS - 1]
        
        return s[0:lps[len(s)-1]]
