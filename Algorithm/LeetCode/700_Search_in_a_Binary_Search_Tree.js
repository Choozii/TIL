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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    const queue=[root];
    
    while(queue.length > 0){
        const node = queue.shift();
        if(node.val === val) return node;
        
        if(node.right) queue.push(node.right);
        if(node.left) queue.push(node.left);
    }
    return null;
};
