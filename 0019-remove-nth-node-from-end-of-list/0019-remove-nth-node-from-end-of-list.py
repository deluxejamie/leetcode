# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        end_finder = head
        behind = head

        for i in range(0,n):
            end_finder = end_finder.next
        
        if end_finder == None:
            return head.next
        else:
            while True:
                end_finder = end_finder.next
                if end_finder == None:
                    behind.next = behind.next.next
                    break
                else:
                    behind = behind.next


        return head