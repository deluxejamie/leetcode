# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:

        head = ListNode()
        current = head
        carry = 0

        while True:
            if not l1 and not l2:
                break
            remaining = l1 or l2
            s = carry + (l1.val if l1 else 0) + (l2.val if l2 else 0)
            remaining.val = s % 10
            carry = s // 10
            current.next = remaining
            if l1: l1 = l1.next
            if l2: l2 = l2.next
            current = current.next
        if carry > 0:
            current.next = ListNode(carry)
        return head.next
            
