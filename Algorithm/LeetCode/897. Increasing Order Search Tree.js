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
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  const newTree = new TreeNode();
  let dummy = newTree;

  const traversal = root => {
    if (root.left) traversal(root.left);
    dummy.right = new TreeNode(root.val, null, null);
    dummy = dummy.right;
    if (root.right) traversal(root.right);
  };
  traversal(root);

  return newTree.right;
};
