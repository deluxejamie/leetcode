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
            s = carry
            if l1: s+= l1.val
            if l2: s+= l2.val
            node = ListNode(s%10)
            carry = s // 10
            current.next = node
            if l1: l1 = l1.next
            if l2: l2 = l2.next
            current = current.next
        if carry > 0:
            current.next = ListNode(carry)
        return head.next
            
