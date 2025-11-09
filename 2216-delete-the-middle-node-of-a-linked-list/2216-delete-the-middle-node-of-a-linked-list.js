/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    if (head.next == null) return null;
    let slow = {next:head};
    let fast = head;
    while (fast?.next) {
        fast = fast?.next?.next;
        slow = slow.next
    }
    slow.next = slow.next.next;
    return head;
};