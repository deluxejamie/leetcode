# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        
        def merge(working, l_a, l_b):
            if l_a == None:
                working.next = l_b
            elif l_b == None:
                working.next = l_a
            else:
                if (l_a.val < l_b.val):
                    working.next = l_a
                    merge(working.next,l_a.next,l_b)
                else:
                    working.next = l_b
                    merge(working.next,l_b.next,l_a)

        dummy = ListNode()
        merge(dummy,list1,list2)
        return dummy.next
