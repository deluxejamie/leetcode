# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        

        def leftEqRight(left, right):
            if (left and not right) or (right and not left):
                return False
            if not left and not right:
                return True
            return left.val == right.val and leftEqRight(left.left,right.right) and leftEqRight(left.right,right.left)
        

        return leftEqRight(root.left,root.right)