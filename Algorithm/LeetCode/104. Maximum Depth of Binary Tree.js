/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;
  let q = [root];
  let level = 0;
  while (q.length > 0) {
    const qLen = q.length;
    for (let i = 0; i < qLen; i++) {
      if (q.length == 0) return level + 1;

      const curr = q.shift();
      if (curr.left) q.push(curr.left);
      if (curr.right) q.push(curr.right);
    }
    level++;
  }
  return level;
};
