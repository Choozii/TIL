/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return null;
  const q = [root];
  let times = 1;
  while (q.length > 0) {
    for (let i = 0; i < times; i++) {
      const curr = q.shift();
      if (i !== times - 1) curr.next = q[0];
      if (curr.left) q.push(curr.left);
      if (curr.right) q.push(curr.right);
    }
    times = 2 * times;
  }
  return root;
};
