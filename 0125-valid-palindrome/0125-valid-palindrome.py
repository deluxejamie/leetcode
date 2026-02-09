class Solution:
    def isPalindrome(self, s: str) -> bool:
        left = 0
        right = len(s)-1
        s = s.lower()

        while left < right:
            while not s[left].isalnum():
                left+=1
                if left > right: return True
            while not s[right].isalnum():
                right-=1
                if left > right: return True
            
            if s[left] == s[right]:
                left+=1
                right-=1
            else:
                return False
        
        return True