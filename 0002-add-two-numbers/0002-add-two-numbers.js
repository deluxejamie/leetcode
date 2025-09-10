/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let temp = new ListNode();
    let current = temp;
    let carry = 0;

    while (l1 || l2 || carry) {
        const calculationResult = ((l1?.val || 0) + (l2?.val || 0) + carry)
        current.next = new ListNode(calculationResult % 10);
        carry = ~~(calculationResult/10)
        l1 = l1?.next
        l2 = l2?.next
        current = current.next;
    }

    return temp.next;


};