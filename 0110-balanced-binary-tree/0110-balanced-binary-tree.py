# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        found = True
        def solve(node):
            nonlocal found
            if node == None:
                return -1
            height_left = 1 + solve(node.left)
            height_right = 1 + solve(node.right)

            print(node.val, height_left,height_right)

            if abs(height_left - height_right) > 1:
                found = False            
            return max(height_left,height_right)

        solve(root)
        return found
                
                

        