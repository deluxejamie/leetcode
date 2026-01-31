# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        diameter = 0
        def max_depth(t):
            nonlocal diameter
            if t == None:
                return 0

            l_depth = max_depth(t.left)
            r_depth = max_depth(t.right)
            
            diameter = max(diameter, l_depth + r_depth)
            return 1 + max(l_depth,r_depth)

        max_depth(root)
        return diameter