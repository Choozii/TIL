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
var middleNode = function (head) {
  let curr = head;
  let ans = head;
  let total_count = 0;
  while (curr != null) {
    curr = curr.next;
    total_count++;
  }
  let middleIndex = Math.floor(total_count / 2);

  while (middleIndex-- > 0) {
    ans = ans.next;
  }
  return ans;
};
