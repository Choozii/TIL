/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let curr = head;
  let length = 0;
  while (curr !== null) {
    length++;
    curr = curr.next;
  }

  let targetIndex = length - n;

  length = 0;
  curr = head;

  while (curr != null) {
    if (targetIndex == 0) {
      return curr.next;
    }

    length++;
    if (length == targetIndex) {
      curr.next = curr.next.next ? curr.next.next : null;
    }

    curr = curr.next;
  }
  return head;
};
