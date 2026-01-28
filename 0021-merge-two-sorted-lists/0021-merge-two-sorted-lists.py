# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        
        dummy = ListNode()
        working = dummy
        l_a = list1
        l_b = list2
        while True:
            if l_a == None:
                working.next = l_b
                break
            elif l_b == None:
                working.next = l_a
                break
            else:
                if (l_a.val < l_b.val):
                    working.next = l_a
                    l_a = l_a.next
                else:
                    working.next = l_b
                    l_b = l_b.next
                working = working.next

        return dummy.next