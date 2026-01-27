# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        def reverse(head,remaining):
            if remaining == None:
                return head
            else:
                new_remaining = remaining.next
                remaining.next = head
                return reverse(remaining,new_remaining)
        
        return reverse(None,head)

        